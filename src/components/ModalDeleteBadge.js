import React from 'react'
import Modal from './Modal'

function ModalDeleteBadge (props){
    return(
        <Modal openModal={props.openModal} closeModal={props.closeModal}>
            <h1>Are you sure? </h1>
            <p>You are about to delete this badge.</p>
            
            <div>
                <button onClick={props.onDeleteBadge} className='btn btn-danger' style={{marginRight:"25px"}}>Delete</button>
                <button onClick={props.closeModal} className='btn btn-primary' >Cancel</button>
            </div>
        </Modal>
    )
}

export default ModalDeleteBadge;