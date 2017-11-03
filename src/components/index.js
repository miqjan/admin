import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect , Link , Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { userFetchData } from '../actions/user';
import  Login from './public/login';
import  Home from './privet/home';

class App extends Component {
    constructor(props){
        super(props);
        this.props.fetchData('user/issignin');
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextprops){

    }
    render() {
        if(this.props.loading === true && this.props.isLogin !== undefined){
            return(
                <Switch>
                    <Route path="/login" component={ Login } />
                    <Route path="/home" component={ Home } /> {/*onEnter is_autentificate */}
                    <Route path="/link" render = {()=>(<Link to="/home">Home</Link>)} />
                    <Redirect to="/login" strict="true" />
                </Switch>
            );
        }else {
            return(<div>Loading...</div>)
        }
        
    }
}

App.propTypes = {
    fetchData: PropTypes.func.isRequired,
    //user: PropTypes.array.isRequired,
    //hasError: PropTypes.bool.isRequired,
    //isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.userinfo.user,
        hasError: state.userinfo.error,
        isLogin: state.userinfo.isLogin,
        loading: state.userinfo.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => { dispatch( userFetchData( url ) ) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
