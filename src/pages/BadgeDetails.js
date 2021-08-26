import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';

import Badge from '../components/Badge';
import photo from '../images/userPlaceholder.png'

import ModalDeleteBadge from '../components/ModalDeleteBadge';

function BadgeDetails(props) {
    const badge = props.badge
    return(
 
          <div>     
            <div className="badge-details-container">
              <div className="badge-details-badge">
                <Badge
                  firstName={badge.firstName}
                  surnames={badge.lastName}
                  email={badge.email}
                  twitter={badge.twitter}
                  jobTitle={badge.jobTitle}
                  avatar={photo}
                />
              </div>
              <div className="actions">
                <h1>Actions</h1>
                <div>
                  <div className = 'actions-buttons'>
                    <Link
                      className="btn btn-primary mb-4"
                      to={`/badges/${badge.idBadge}/edit`}
                    >
                      Edit
                    </Link>
                  </div>

                  <div>
                    <button onClick={props.openModal} className="btn btn-danger">Delete</button>
                    <ModalDeleteBadge 
                      openModal={props.openModalReturn} 
                      closeModal={props.closeModal}
                      onDeleteBadge={props.onDeleteBadge}>  
                    </ModalDeleteBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        );
    }
    

export default BadgeDetails;