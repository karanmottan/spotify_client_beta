import {React , Component} from 'react';
import './Mainbody.css';
import {GetUserSavedTracks , GetRecentPlayed , Topartist} from './GetUserSavedTracks';
import Widgetmaker from './Widgetmaker';
import {LikedTrackDisplay} from './LikedTrackDisplay';
import Artists from './Artists';
import {getToken} from './Search';

class Mainbody extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tracksinfo : '',
            likedtracks: '',
            topartist : ''
        };
      }
    componentDidMount(){
        const result = async() => {
            const returned = await GetRecentPlayed(this.props.token);
            const liked = await GetUserSavedTracks(this.props.token);
            const topart = await Topartist(this.props.token);
            getToken(this.props.token);
            this.setState({
                tracksinfo : returned.items,
                likedtracks : liked,
                topartist : topart
            })
        }
        result();
    }  


    render(){
        return(
            <div className="main_container">
                <Artists artists = {this.state.topartist} />
                <Widgetmaker tracks = {this.state.tracksinfo} />
                <LikedTrackDisplay likedtracks = {this.state.likedtracks} />
            </div>
        )
    }
}

export default Mainbody;