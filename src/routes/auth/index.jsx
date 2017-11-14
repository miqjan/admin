import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserLoginFetchData } from '../../actions/user';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';


class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            error:''
        };
    }
    componentWillReceiveProps(nextprops){
        this.setState({'error': nextprops.error.data});
    }
    handleButtonClick = () => {
        if(this.state.email && this.state.password){
            this.props.UserFetchData('user/signin', this.state.email, this.state.password);
        } else { 
            this.setState({'error':'email or password is empty'});
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        
        return (
            <div>
                <label>{this.state.error}</label>
                
                <div>
                    <input type='text' name='email' onChange={this.handleChange}/>
                    <input type='password' name='password' onChange={this.handleChange}/>
                    <button type="button" className="btn btn-xs btn-primary" 
                    onClick={this.handleButtonClick}>Login</button>
                </div>
            </div>
        );
    }
}

Auth.propTypes = {
    UserFetchData: PropTypes.func.isRequired,
    error: PropTypes.object,
    isLogin: PropTypes.bool.isRequired,
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        error: state.userinfo.error,
        isLogin: state.userinfo.isLogin,
        router : state.router,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        UserFetchData: (url,email,password) => dispatch(UserLoginFetchData(url,email,password)),
       
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));

