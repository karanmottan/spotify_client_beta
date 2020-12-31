

const trial = async(_token) => {
    const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', 
        headers :  {  
            'Authorization' : `Bearer ${_token}`
        },
    })
    
    const result = await response.json();
    return result;
}

export default trial;