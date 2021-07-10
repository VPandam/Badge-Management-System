import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge'
import photo from '../images/d.jpg'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component{
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

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({loading: true, error: null});

        try {
            console.log(this.props)
            const data = await api.badges.read(
                this.props.match.params.badgeId)
            this.setState({loading: false, form:data});

        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    handleChange = (e) => {
        
        this.setState({
            form: {
                
                //Three dots spreads the values of the iterable object.
                //In this case evaluates to all the values that have been typed in the form
                ...this.state.form,
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
        this.setState({loading: true, error: null});
        console.log("update")
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);

            this.setState({loading:false});
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
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST NAME'} 
                                surnames={this.state.form.lastName || 'SURNAME'} 
                                jobTitle={this.state.form.jobTitle || 'JOB TITLE'} 
                                twitter={this.state.form.twitter || 'TWITTER'}
                                avatar={photo}>             
                            </Badge>
                        </div>
                        <div className='col-6'>
                            <h1>Edit Badge</h1>
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

export default BadgeEdit;