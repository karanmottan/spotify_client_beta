

export const GetUserSavedTracks = async(token) => {

    const response = await fetch('https://api.spotify.com/v1/me/tracks?limit=6',{
        method: 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });

    const result = await response.json();
    return result.items; 

}

export const GetRecentPlayed = async(token) => {

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=6',{
        method: 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });
    const result = await response.json();
    return result;
}

export const Topartist = async(token) => {
    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=6',{
        method: 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });
    const result = await response.json();
    return result.items;
}