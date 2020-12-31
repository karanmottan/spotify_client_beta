import { React , Component} from 'react';
import trial from './getUserInfo';
import './DisplayUserInfo.css';
import Search from './Search';
import SearchResult from './searchResult';


class DisplayUserInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            img_url : '',
            query : '',
            queryResult : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    componentDidMount(){
        const response = async() => {
           const result =  await trial(this.props.token);
           this.setState({
               username : result.display_name,
               img_url: result.images[0].url
           })
        } 
        response();
        
    }  
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.query);
        console.log('form submitted');
        const newAsync = async() => {
            const result = await Search(this.state.query);
            this.setState({
                queryResult : result
            });
            console.log(result);
        }
        newAsync();
    }
    handleChange(e){
        const string =  e.target.value.split(' ').join('');
        this.setState({query: string});
    }
    render(){
        return(
            <div className="navbar">
                {this.state.queryResult ? <SearchResult results = {this.state.queryResult}/> : <h1></h1>}
                <form className="search_form" onSubmit={this.handleSubmit}>
                <input type="text" className="search_box" placeholder="Search" onChange={this.handleChange}></input>
                <button className="search_button">Search</button>
                </form>
                <div className="info_container">
                    <div className="img_container"><img src={this.state.img_url} alt="user_profile_picture" className="img_tag"></img></div>
                    <div className="name">{this.state.username}</div>
                    <div className="logout"><a href="/logout">Logout</a></div>
                </div>
            </div>
        );  
    }  
}

export default DisplayUserInfo;