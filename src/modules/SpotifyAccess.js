const client_id = 'de3a5ef51a5649f9946a649089830f0b';
const base = 'https://accounts.spotify.com/authorize';
const redirect_uri = 'http://localhost:3000/';

export const link = base + `?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20streaming%20user-library-read%20user-read-currently-playing%20user-read-private%20user-read-email%20user-top-read&response_type=token&show_dialog=true`;

export const getTokenFromUrl = (url) => {

    const firstSplit = url.hash.substring(1).split('&');
    const tokenArray  = firstSplit[0].split('=');
    const token = tokenArray[1];
    console.log(token);
    return token;     
}

