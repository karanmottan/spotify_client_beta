import React from 'react';
import './Sidebar.css';

function SidebarOption ({title}){
        return(
                <div className="link">
                    <h1>{title}</h1>    
                </div>
        );
}

export default SidebarOption; 