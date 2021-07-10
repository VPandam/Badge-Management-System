import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import photo from '../images/d.jpg'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading';
import Hero from '../components/Hero'
import { head } from 'lodash';

class BadgeNew extends React.Component{
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            twitter: '',
        }
    }
    handleChange = (e) => {
        
        this.setState({
            form: {
                
                ...this.state.form, //Three dots spreads the values of the iterable object.
                                    //In this case evaluates to all the values that have been typed in the form 
                [e.target.name]: e.target.value //With this expression we add a new value to the property.
            
                //Another way to do that would be:
                // const NEW_FORM = this.state.form;
                // NEW_FORM[e.target.name] = e.target.value; 
                // this.setState({form: NEW_FORM})               
            
            }
        })
      };
    
    handleSubmit = async e =>{
        e.preventDefault();
        console.log('badgenewhandlesubmit')
        this.setState({loading: true, error: null});
        console.log(this.state)

        try {
            await api.badges.create(this.state.form);
            this.setState({loading:false});
            console.log(this.props)

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading/>;
        }
        return (
            <React.Fragment>

                
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            {console.log(this.state)}
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST NAME'} 
                                surnames={this.state.form.lastName || 'SURNAME'} 
                                jobTitle={this.state.form.jobTitle || 'JOB TITLE'} 
                                twitter={this.state.form.twitter || 'TWITTER'}
                                avatar={photo}>             
                            </Badge>
                        </div>
                        <div className='col-6'>
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit} 
                                error={this.state.error}   
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
    

    
}

export default BadgeNew;