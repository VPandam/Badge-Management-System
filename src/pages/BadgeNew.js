import React from 'react';
import NavBar from '../components/NavBar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import photo from '../images/4fb6dd0d-b0c4-47a3-9c7e-8141db526a25.jpg'

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt="" />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Badge 
                            firstName='Victor' 
                            surnames='Gea Villa' 
                            jobTitle='Frontend Developer' 
                            twitter='@VitoYeah' 
                            avatar={photo}>             
                            </Badge>
                        </div>
                    <div />
                    </div>
                </div>
            </div>
            
        );
    }
    

    
}

export default BadgeNew;