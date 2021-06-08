import React from 'react'
import './styles/BadgesList.css';
import {Link} from 'react-router-dom'

class BadgesListItem extends React.Component {
    render() {
      return (
        <><div className='Badges__list__list-avatar'>
              <img src={this.props.badge.avatarUrl} alt="" />
          </div><div className='Badges__list__list-text'>
                  <p className='Badges__list__list-text-name'>{this.props.badge.firstName + ' ' +
                    this.props.badge.lastName}</p>
                  <div>
                      <div className='logo-twitter-container'></div>
                      <p className='Badges__list__list-text-twitter'>@{this.props.badge.twitter}</p>
                  </div>
                  <p className='Badges__list__list-text-jobTitle'>{this.props.badge.jobTitle}</p>
              </div></>
      );
    }
  }
class BadgesList extends React.Component{
    render(){
        
        if (this.props.data.length === 0) {
            return <h3> No badges found </h3>
        }
        
        return (
        <div className='Badges__list'>
            <div className='Badges__container'>
                <ul className='list-unstyled'>
                    {this.props.data.map((badge) => {
                        return (
                            <li className='Badges__list__list' key={badge.id}>
                                <Link
                                    className="text-reset text-decoration-none"
                                    to={`/badges/${badge.id}/`}
                                >
                                    <BadgesListItem badge={badge} />
                                </Link>
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