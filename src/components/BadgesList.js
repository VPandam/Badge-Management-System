import React from 'react'
import './styles/BadgesList.css';
import {Link} from 'react-router-dom'

class BadgesListItem extends React.Component {
    render() {
      return (
        <React.Fragment>
            {/* <div className='Badges__list__list-avatar'>
                <img src={this.props.badge.avatarUrl} alt="" />
            </div> */}
            
            <div className='Badges__list__list-text'>
                    <p className='Badges__list__list-text-name'>{this.props.badge.firstName + ' ' +
                        this.props.badge.lastName}</p>
                    <div>
                        <div className='logo-twitter-container'></div>
                        <p className='Badges__list__list-text-twitter'>@{this.props.badge.twitter}</p>
                    </div>
                    <p className='Badges__list__list-text-jobTitle'>{this.props.badge.jobTitle}</p>
            </div>
        </React.Fragment>
      );
    }
  }
function BadgesList(props){
        
    const [query, setQuery] = React.useState('')

    const filteredBadges = props.data.filter((badges) => {
        return `${badges.firstName} ${badges.lastName}`.toLocaleLowerCase().includes(query.toLowerCase())
    }
)
    // if (filteredBadges.length === 0) {
    //     return(
    //         <React.Fragment>
    //             <div className="form-group">
    //                 <label>Filter Badges</label>
    //                 <input 
    //                 type="text" 
    //                 className='form-control' 
    //                 value={query}
    //                 onChange={(e) => {
    //                     setQuery(e.target.value)
                        
    //                 }}
    //                 />
    //             </div>
    //             <h3> No badges found </h3>
    //         </React.Fragment>
    //     )
    // }
    
    return (
    <div className='Badges__list'>
        
        <div className="form-group">
            <label>Filter Badges</label>
            <input 
            type="text" 
            className='form-control' 
            value={query}
            onChange={(e) => {
                setQuery(e.target.value)
            }}
            />
        </div>

        <div className='Badges__container'>
            <ul className='list-unstyled'>
                {filteredBadges.map((badge) => {
                    return (
                        <li className='Badges__list__list' key={badge.idBadge}>
                            {console.log(badge.idBadge)}
                            <Link
                                className="text-reset text-decoration-none"
                                to={`/badges/${badge.idBadge}/`}
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


export default BadgesList