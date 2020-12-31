
function Artists({artists}){
    return(
        
            <div className="albums_container">
                <span className="recently_played">Your Favourite Artists</span>
                {artists && artists.map(artist => {
                    return(
                        <div className="album_info" data-uri={artist.uri} key={artist.uri}>
                            <div className="album_cover"><img src={artist.images[0].url} alt="albumcover" width="186" heigth="185" ></img></div>
                            <h1 className="artist_name">{artist.name}</h1>
                            <h1 className="track_name">{artist.genres[0]}</h1>
                        </div>
                    )
                            
                })}
            </div>
        
    )
}

export default Artists;