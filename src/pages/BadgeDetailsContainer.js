import React from 'react';


import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

import './styles/BadgeDetails.css';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  };

  componentDidMount() {
    this.fetchData();

    window.onclick = function(e) {
      let modals = document.getElementsByClassName('Modal')
      console.log(modals)
      if(e.target === modals[0]){
        this.handleCloseModal()
      }
    }.bind(this)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = () => this.setState({ modalIsOpen: true});
  

  handleCloseModal = () => this.setState ({ modalIsOpen: false});

  onDeleteBadge = async () => {
    this.setState({loading: true, error: false});

    try {
      if(this.props.match.params.badgeId <= 4){
        alert("This is a demo badge, you cant delete it!")
      }else{
        await api.badges.remove(this.props.match.params.badgeId)
        
      }
      this.props.history.push('/badges')
      
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  

  render(){
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return <BadgeDetails 
    badge={this.state.data} 
    openModal={this.handleOpenModal} 
    openModalReturn={this.state.modalIsOpen} 
    closeModal={this.handleCloseModal}
    onDeleteBadge={this.onDeleteBadge}
    />
  }

  
}

export default BadgeDetailsContainer;