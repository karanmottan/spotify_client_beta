import {React , Component} from 'react';
import './loginPage.css';

class loginPage extends Component {

    render(){
        return(
            <div className="container">
                <div className="smallerContainer">
                    <div className="logoholder">
                        <img src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif" width="500" heigth="500" alt="spotify_logo"></img>
                    </div>
                    <div className="linkholder">
                        <a href={this.props.link} className="loginlink">LOGIN WITH SPOTIFY</a>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default loginPage;
