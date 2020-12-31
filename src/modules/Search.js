
let token = ''

export const getToken = (received) => {
    token = received;
}

const Search = async(query) => {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist%2Calbum`,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });
    const result = await response.json();
    return result;

}

export default Search;