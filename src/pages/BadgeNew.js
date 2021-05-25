import React from 'react';
import NavBar from '../components/NavBar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import photo from '../images/d.jpg'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component{
    state = {
        form: {
            firstName: '',
            secondName: '',
            jobTitle: '',
            email: '',
            twitter: '',
        }
    }
    
    handleChange = e => {
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
    
    render(){
        return (
            <div>
                <NavBar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt="" />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge 
                            firstName={this.state.form.firstName} 
                            surnames={this.state.form.secondName} 
                            jobTitle={this.state.form.jobTitle} 
                            twitter={this.state.form.twitter}
                            avatar={photo}>             
                            </Badge>
                        </div>
                        <div className='col-6'>
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
    

    
}

export default BadgeNew;