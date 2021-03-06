import React from 'react';

import "./styles/Badge.css";

class Badge extends React.Component {
    
    render(){
        return <div className="Badge">
            <div className="Badge__header">
                
            </div>
            <div className="Badge__section-name">
                <img className = "Badge__avatar" src={this.props.avatar} alt="Avatar" />
                <h1>{this.props.firstName} <br /> {this.props.surnames}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.twitter}</div>
            </div>

            
        </div> 
    }   
}
export default Badge;