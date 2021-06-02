import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badges.css';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api'
let errorsito = new Error('Errorrrrr')

class Badges extends React.Component{
  
    state = {
        loading: true,
        error: null,
        data: undefined
      };

    componentDidMount(){
      this.fetchData();
    }

    async fetchData(){
      
      this.setState({error: null, loading: true});

      try {
        const data = await api.badges.list();
        this.setState({data: data, loading: false});
      
      } catch (error) {
        this.setState({error: error, loading: false})
      }
    }

    render(){

      if (this.state.loading === true) {
        return 'Loading...';
      }

      if (this.state.error){
        return `Error: ${this.state.error.message}`
      }
    
      return (
        <React.Fragment>
          {console.log(this.state.error)}
        <div className='Badges'>
            <div className='Badges__hero'>
                <div className='Badges__container'>
                    <img src={confLogo} alt="" className='Badges_conf-logo' />
                </div>
            </div>
        </div>

        <div className='Badge__container'>
            <div className='Badges__buttons'>
                <Link to="/Badges/new" className=' btn btn-primary btn-new-badge'>
                    New Badge
                </Link>
            </div>

            <div>
              <BadgesList data={this.state.data}/>
            </div>
        </div>
      </React.Fragment>
    ) 
        
    }
}

export default Badges;
