import {React ,Component} from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

class Sidebar extends Component{
    render(){
        return(
           <div className="content_container">
               <div className="link_container">
                    <SidebarOption  title ={'Home'}/>
                    <SidebarOption  title={'Liked'}/>
               </div>
           </div>
        )
    }
}

export default Sidebar;