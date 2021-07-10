import React from 'react';
import logo from '../images/logo.svg';
import '../components/styles/NavBar.css'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <div className='navBar'>
                <Link to='/'>
                    <span className='navBar_title-2'>Badge Management</span>
                </Link>
            </div>
        )
    }
}

export default NavBar;