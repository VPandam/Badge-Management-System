import React from 'react'
import './styles/BadgesList.css';

class BadgesList extends React.Component{
    render(){
        
        return (
        <div className='Badges__list'>
            <div className='Badges__container'>
                <ul className='list-unstyled'>
                    {this.props.data.map((badge) => {
                        return (
                            <li className='Badges__list__list' key={badge.id}>
                                <div className='Badges__list__list-avatar'>
                                    <img src={badge.avatarUrl} alt="" />
                                </div>
                                <div className='Badges__list__list-text'>
                                    <p className='Badges__list__list-text-name'>{badge.firstName} {badge.lastName}</p>
                                    <div>
                                        <div className='logo-twitter-container'></div>
                                        <p className='Badges__list__list-text-twitter'>@{badge.twitter}</p>
                                    </div>
                                    <p className= 'Badges__list__list-text-jobTitle'>{badge.jobTitle}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        )

    }
}

export default BadgesList