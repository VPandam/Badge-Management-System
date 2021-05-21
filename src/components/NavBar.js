import React from 'react';
import logo from '../images/logo.svg';
import '../components/styles/NavBar.css'

class NavBar extends React.Component{
    render(){
        return(
            <div className='navBar'>
                <a href='#bottom'>
                    <img className='navBar_logo' src={logo} alt="" />
                    <span className='navBar_title-1'>Platzi</span>
                    <span className='navBar_title-2'>Conf</span>
                </a>
            </div>
        )
    }
}

export default NavBar;