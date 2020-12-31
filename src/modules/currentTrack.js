import { React ,Component } from "react";


export class  Displayer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            trackInfo : this.props.info
        };
        console.log('inside contructor' + this.props.info);
      }  
    
    render(){
        return(
        
            <div className="current_track">
                <div className="track_image"><img alt="album cover"></img></div>
                <div className="track_name">{this.state.trackInfo}</div>
                <div className="track_name">Track Name</div>
            </div>
        )
    }
}

