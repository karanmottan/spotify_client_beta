import {React, Component} from 'react';
import './searchResult.css';
//this.props.results.artists.items[0].images[0].url//
import {trial} from './playerSetup';

class SearchResult extends Component{

    constructor(props) {
        super(props);
        this.state = {
            returned : props.results
        };
      }
    
    componentDidMount(){
        this.setState({
            returned : this.props.results
        })
        console.log(this.state.returned);
    }  

    handleClick(e){
        console.log(e.target.getAttribute('data-uri'));
        trial(e.target.getAttribute('data-uri'));
    }
      
    render(){
        return(
            <div className="search_main">
                <h1 className="header">Top artist according to your search</h1>
                    <div className="artist_display">
                        <img src={this.props.results.artists.items[0].images[0].url} width="80" data-uri={this.props.results.artists.items[0].uri}></img>
                        <h1 className="label">{this.props.results.artists.items[0].name}</h1>
                    </div>
                <h1 className="header">Top track according to your search</h1>
                    <div className="tracks_display" onClick={this.handleClick}>
                        <img src={this.props.results.tracks.items[0].album.images[0].url} width="100" data-uri={this.props.results.tracks.items[0].uri}></img>
                        <h1 className="label">{this.props.results.tracks.items[0].name}<br/>{this.props.results.tracks.items[0].artists[0].name}</h1>
                    </div>
                <h1 className="header">Top album  according to your search</h1>
                    <div className="tracks_display" onClick={this.handleClick}>
                        <img src={this.props.results.albums.items[0].images[0].url} width="100" data-uri={this.props.results.albums.items[0].uri}></img>
                        <h1 className="label">{this.props.results.albums.items[0].name}<br/>{this.props.results.albums.items[0].artists[0].name}</h1>
                    </div>    
            </div>
        );
    }
    
}

export default SearchResult; 