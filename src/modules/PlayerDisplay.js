import { React , Component} from 'react';
import './PlayerDisplay.css';
import {toggle, next} from './playerSetup';

export class PlayerDisplay extends Component{


    handleToggle(){
        console.log('handle click');
        toggle();
    }

    handleNext(){
        next();
    }

    render(){
        return(
            <div className="box">
                <button className="shuffle"><img src="https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/media-shuffle.png" width="30px" className="imgShuffle" alt="shuffle"></img></button>
                <button className="backward"><img src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/previous_rewind_backward_track-2-256.png" width="20px" alt="backward"></img></button>
                <button onClick={this.handleToggle} className="startPause"></button>
                <button className="forward" onClick={this.handleNext}><img src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/next_forward_skip_track-2-256.png" width="20px" alt="forward"></img></button>
                <button className="repeat"><img src="https://cdn1.iconfinder.com/data/icons/multimedia-control/100/Multimedia_-14-256.png" width="30px" className="imgRepeat" alt="repeat"></img></button>
            </div>
            
        );
    }
}
