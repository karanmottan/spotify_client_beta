    
    let token = '';
    let id = '';

    export const getToken = (_token) => {
        token = _token;  
      }

    let player = '';

    const instantiatePlayer = () => {
        player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
      });
    }

     export const toggle = () => {
      player.togglePlay().then(() => console.log('toggled play'));
    }

    export const next = () => {
      player.nextTrack().then(() => {
        console.log('Skipped to next track!');
      });
    }
    
    
    window.onSpotifyWebPlaybackSDKReady = () => {
      
      instantiatePlayer();

      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });

      // Playback status updates
      player.addListener('player_state_changed', state => { 
        console.log(state);
        getUserCurrentlyPlaying(token);
        const startPause = document.querySelector('.startPause');
        if(state.paused){
          startPause.classList.remove('active');
        }else{
          startPause.classList.add('active');
        }
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        id = device_id;
        setDefaultPlay();
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      
      // Connect to the player!
      player.connect();

    };  
    export const trial = async(uri) => {
        console.log('inside trial method');
        console.log(id);
        const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
          method: 'PUT',
          headers :  {  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ uris: [`${uri}`] }),
        });
        console.log(response);
      }

    const getUserCurrentlyPlaying = async(token) => {
      const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing',{
        method : 'GET',
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      })
      console.log(response);
    }  


    //this will be used to set a track to be played default when the user first uses the application
    const setDefaultPlay = async() => {
      const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
          method: 'PUT',
          headers :  {  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ uris: ['spotify:track:21WVC4YuFUgakOEDkTBwLd'] }),
        });
        console.log(response);
        setTimeout(() => {
          player.pause();
        }, 1200);
      }      

      