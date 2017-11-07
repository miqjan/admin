import React from 'react';
import styles from './components.pcss';
import TableHead from '../TableHead';
import TableItem from '../TableItem';


import Form, { FormGroup, Input} from '../../Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Table extends React.Component {
    state = {
        form: {
            "firstName":"",
            "lastName": "",
            "email":""
        },
        tableBody: [
            {
                "firstName":"Ando",
                "lastName": "Hakobqoxyan",
                "email":"ando.hak1998@gmail.com"
            },
            {
                "firstName":"Ando",
                "lastName": "Hakobqoxyan",
                "email":"ando.hak1998@gmail.com"
            },
            {
                "firstName":"Ando",
                "lastName": "Hakobqoxyan",
                "email":"ando.hak1998@gmail.com"
            },
            {
                "firstName":"Ando",
                "lastName": "Hakobqoxyan",
                "email":"ando.hak1998@gmail.com"
            },
        ],
    };
    
    tableHead = [
        "firstname",
        "lastname",
        "email"
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
        } = this.state;
        
        const form = Object.assign({}, this.state.form);
        
        tableBody.push(form);
        
        this.setState({
            tableBody,
            form: {
                "firstName" : "",
                "lastName" : "",
                "email" : ""
            }
        })

    }

  render() {
    return (
      <div className={styles.root}>
          <Form>
              <FormGroup>
                  <MuiThemeProvider>
                      <TextField
                          hintText="First Name"
                          onChange={this.newRowText.bind(this, "firstName")}
                          value={this.state.form.firstName}
                      />
                  </MuiThemeProvider>
              </FormGroup>
              <FormGroup>
                  <MuiThemeProvider>
                      <TextField
                          hintText="Last Name"
                          onChange={this.newRowText.bind(this, "lastName")}
                          value={this.state.form.lastName}
                      />
                  </MuiThemeProvider>
              </FormGroup>
              <FormGroup>
                  <MuiThemeProvider>
                      <TextField
                          hintText="Email"
                          onChange={this.newRowText.bind(this, "email")}
                          value={this.state.form.email}
                      />
                  </MuiThemeProvider>
              </FormGroup>
              <MuiThemeProvider>
                  <FlatButton onClick={this.addRow} label="Default" />
              </MuiThemeProvider>
          </Form>
        <table>
          <TableHead tableHead={this.tableHead} />
          <TableItem onChange={this.handleChange} tableBody={this.state.tableBody} />
        </table>
      </div>
    )
  }
}

export default Table;
