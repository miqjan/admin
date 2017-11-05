import React from 'react';
import styles from './components.pcss';
import TableHead from '../TableHead';
import TableItem from '../TableItem';

class Table extends React.Component {
  tableHead = [
    "firstname",
    "lastname",
    "email"
  ];

  tableBody = [
    {
      "firstname":"Ando",
      "lastname": "Hakobqoxyan",
      "email":"ando.hak1998@gmail.com"
    },
    {
      "firstname":"Ando",
      "lastname": "Hakobqoxyan",
      "email":"ando.hak1998@gmail.com"
    },
    {
      "firstname":"Ando",
      "lastname": "Hakobqoxyan",
      "email":"ando.hak1998@gmail.com"
    },
    {
      "firstname":"Ando",
      "lastname": "Hakobqoxyan",
      "email":"ando.hak1998@gmail.com"
    }
  ];

  render() {
    return (
      <div className={styles.root}>
        <table>
          <TableHead tableHead={this.tableHead} />
          <TableItem tableBody={this.tableBody} />
        </table>
      </div>
    )
  }
}

export default Table;
