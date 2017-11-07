import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './components.pcss';
import TableHead from '../TableHead';
import TableItem from '../TableItem';


import Form, { FormGroup, Input} from '../../../components/ui/Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';

import { allUserFetchGet } from '../../../actions/userlist';

class Table extends React.Component {
    componentWillMount(){
        this.state = {
            form: {
                "firstName":"",
                "lastName": "",
                "email":"",
                "phone":"",
                "address":"",
                "type":"",
                "password":"",
                "c_password":""
            },
            tableBody: []   
        };
        this.props.fetchDataAllUsers()
    }
    componentWillReceiveProps(nextprop){
        this.setState({tableBody:nextprop.users});
    }
    tableHead = [ //config 
        "First Name",
        "Last Name",
        "E-mail",
        "Phone",
        "Address",
        "Type",
        "Password",
        "Cnfirm Password"
    ];
    handleChange = (key, event) => {
        const {
            name,
            value
        } = event.target;

        const { tableBody } = this.state;

        tableBody[key][name] = value;

        this.setState({
            tableBody
        });

    };
    newRowText = (name, event) => {
        const { value } = event.target;

        const { form } = this.state;

        form[name] = value;

        this.setState({
            form
        });

    }
    addRow = () => {
        const { 
            tableBody,
            form
        } = this.state;
        const CopyForm = _.clone(form);
        const password = CopyForm.password;
        delete CopyForm.password;
        delete CopyForm.c_password;
        tableBody.push(CopyForm);
        for(let key in form){
            form[key] = '';
        }
        this.setState({
            tableBody,
            form
        })

    }

    render() {
        return (
            <div className={styles.root}>
                <Form>
                    {Object.keys(this.state.form).map((key,index)=>{
                        return (<FormGroup key={index}> 
                            <MuiThemeProvider>
                                <TextField
                                    hintText={this.tableHead[index]}
                                    onChange={this.newRowText.bind(this, key)}
                                    value = {this.state.form[key]}
                                />
                            </MuiThemeProvider>
                        </FormGroup>)
                    })}
                    
                    <MuiThemeProvider>
                        <FlatButton onClick={this.addRow} label="Default" />
                    </MuiThemeProvider>
                </Form>
                <table>
                
                    <TableHead tableHead={this.tableHead.slice(0,-2).concat("Removed")} />
                    <TableItem onChange={this.handleChange} tableBody={this.state.tableBody} />
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isloaded: state.userlist.isloaded,
        users: state.userlist.users,
        error: state.userlist.error
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataAllUsers: () =>  dispatch ( allUserFetchGet() )
    };
};

Table.propTypes = {
    isloaded: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    users: PropTypes.array,
    fetchDataAllUsers : PropTypes.func
}
export default connect(mapStateToProps,mapDispatchToProps)(Table);