import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push,replace } from 'react-router-redux';
import { withRouter,Link } from 'react-router-dom';

class Home extends Component {

    //@decorator isautentificate 
    constructor(props){
        super(props);
        if (!!props.isLogin == false) {
            console.log(this.props);
            //props.history.replace('/login',props.location.state);
            this.props.gotor('/login');
            console.log(this.props);
        }
    }
    componentWillReceiveProps(nextprops){
        // if (!!nextprops.isLogin == false) {
        //     nextprops.history.push('login');
        // }
        console.log(nextprops);
    }
    componentWillMount() {
    };
    render() {

        return(
            <div>Home static </div>
        );
    }
}
Home.PropTypes = {
    user: PropTypes.object.isRequired,
    isLogin: PropTypes.bool.isRequired,
    router : PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    return {
        user: state.userinfo.user,
        isLogin: state.userinfo.isLogin,
        router : state.router
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goto: (url) => dispatch( push( url ) ),
        gotor: (url) => dispatch( replace( url ) )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

