import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {teamFetchData} from '../../actions/team';
import jQuery from 'jquery';


class ImgFormatter extends React.Component {
    render() {
        return (
            <img height='50' src={this.props.src}/>
        );
    }
}
ImgFormatter.propTypes = {
    src: PropTypes.string
}
function onAfterSaveCell(row, cellName, cellValue) {
    alert(`Save cell ${cellName} with value ${cellValue}`);

    let rowStr = '';
    for (const prop in row) {
        rowStr += prop + ':' + row[prop] + '\n';
    }

    alert('Thw whole row :\n' + rowStr);
}
function onBeforeSaveCell(row, cellName, cellValue) {
// You can do any validation on here for editing value,
// return false for reject the editing
    return true;
}
function carrntFormatter(cell, row, enumObject, index)
{
    return <ImgFormatter  src={cell}/>;
}


const cellEditProp = {
    mode: 'dbclick',
    blurToSave: true,
    beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams:[]
        };
    }
    componentWillMount() {
        this.props.teamFetchAll('team');
    }
    componentWillReceiveProps(nextprop) {
        this.setState({teams:nextprop.teams});
    }
    onAfterDeleteRow(){
       
    }
    onAfterInsertRow(){
        
    }
    render() {

        const selectRow = {
            mode: 'checkbox',
            bgColor: 'rgb(238, 193, 213)'
        };
        const options = {
            afterDeleteRow: this.onAfterDeleteRow,  // A hook for after droping rows.
            afterInsertRow: this.onAfterInsertRow   // A hook for after insert rows
        };
        return ( 
            <div > 
                <BootstrapTable data={this.state.teams}
                striped hover
                selectRow={ selectRow }
                cellEdit={ cellEditProp }
                insertRow={ true }
                deleteRow={ true }
                options={ options }
                >
                    <TableHeaderColumn isKey={true} hidden dataField='id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='img' dataFormat={ carrntFormatter }>Img</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='info'>Info</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.team.teams,
        error: state.team.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        teamFetchAll: (url) =>  dispatch ( teamFetchData(url) )
    };
};

Table.propTypes = {
    error: PropTypes.object,
    teams: PropTypes.array,
    teamFetchAll: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);