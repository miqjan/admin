import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserLoginFetchData } from '../../actions/user';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';

class login extends Component {
    constructor(props){
        super(props);
        if (!!props.isLogin == true) {
            props.goto('/home');
        }
        console.log(!!props.isLogin);
    }
    LoginButtomClick() {
        this.props.UserFetchData('user/signin',this.state.email,this.state.password);
    }
    InputChangeHendler(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        if(this.props.isLogin === false){
            return (
                
                <div>
                    <span>{this.props.error.data}</span>
                    <div>
                    <input type='text' name='email' onChange={this.InputChangeHendler.bind(this)}/>
                    <input type='password' name='password' onChange={this.InputChangeHendler.bind(this)}/>
                    <button type="button" className="btn btn-xs btn-primary" onClick={this.LoginButtomClick.bind(this)}>Login</button>
                    </div>
                </div>
            );
        }else {
            return <div></div>
        }
        
    }
}

login.propTypes = {
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
        goto: (url) => dispatch( push( url ) )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(login));

