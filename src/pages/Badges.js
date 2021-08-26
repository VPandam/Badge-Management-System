import React from 'react';
import './styles/Badges.css';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api'
import PageLoading from '../components/PageLoading'


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
        return <PageLoading/>;
      }

      if (this.state.error){
        return `Error: ${this.state.error.message}`
      }
    
      return (
      <React.Fragment>
        
        
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
