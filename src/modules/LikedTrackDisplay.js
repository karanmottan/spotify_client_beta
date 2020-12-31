import {trial} from './playerSetup';

const handleClick = (e) =>{
    console.log(e.target.getAttribute('data-uri'));
    trial(e.target.getAttribute('data-uri'));
}


export function LikedTrackDisplay({likedtracks}){
    return(
        <div className="albums_container">
            <span className="recently_played">Liked tracks</span>
            {likedtracks && likedtracks.map(track => {
                return(
                    <div className="album_info"  key={track.track.uri} onClick={handleClick}>
                        <div className="album_cover"><img src={track.track.album.images[1].url} data-uri={track.track.uri} alt="albumcover" width="186" heigth="185" ></img></div>
                        <h1 className="artist_name">{track.track.album.artists[0].name}</h1>
                        <h1 className="track_name">{track.track.name}</h1>
                    </div>
                )
                        
            })}
        </div>
    )
}   
