import React from 'react';

import '../components/styles/Hero.css'

function Hero (props){
    return (

        <div className='Badges'>
            <div className='Badges__hero'>
                <div className='Stars-container'>

                  <div className='Badges__hero-image'>
                      <img src={props.image} style={{height: props.height}} alt="" className='Badges_conf-logo' />
                  </div>
                </div>
            </div>
        </div>

    )
}

export default Hero;