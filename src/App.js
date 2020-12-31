import {React , Component} from 'react';
import './App.css';
import { link } from './modules/SpotifyAccess';
import {getTokenFromUrl}   from './modules/SpotifyAccess';
import LoginPage from './modules/loginPage';
import DisplayUserInfo from './modules/DisplayUserInfo';
import Mainbody from './modules/Mainbody';
import {getToken} from './modules/playerSetup';
import {PlayerDisplay} from './modules/PlayerDisplay';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {token : ''};
  }
  componentDidMount(){
    const _token = getTokenFromUrl(window.location);
    window.location.hash = '';
    if(_token){
      this.setState({
        token : _token
      })
    }
    getToken(_token);
  }
 
  
    render(){
      return (
        
           <div className="App">
              {
                this.state.token ? (
                <div>
                  <DisplayUserInfo token = {this.state.token} />
                  <Mainbody token = {this.state.token} /> 
                  
                <PlayerDisplay />
                </div>  
                ) : (
                  <LoginPage link={link}/>
                )
              }   
          </div>
        
           
      );
    }
}

export default App;
