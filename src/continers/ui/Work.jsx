import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';

import {workFetchData,workAddData,workEditData,workDelateDatas} from '../../actions/work';
import jQuery from 'jquery';



class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work:[],
            images:[],
        };
    }
    handleInsertButtonClick = (onClick) => {
     
        onClick();
    }
    createCustomInsertButton = (onClick) => {
        return (
            <InsertButton
            btnText='Add'
            btnContextual='btn'
            className='my-custom-class'
            btnGlyphicon='glyphicon-edit'
            onClick={ () => this.handleInsertButtonClick(onClick) }/>
        );
    }
    componentWillMount() {
        this.props.workFetchAll('work');
    }
    componentWillReceiveProps(nextprop) {
        this.setState({work:nextprop.work});
    }
    onAfterDeleteRow(rowes){
        this.props.workDelateDatas('work/delate',rowes);
    }
    onAfterInsertRow(row){
        this.props.workAddData('work',row);
    }
    onAfterSaveCell(row, cellName, cellValue) {}
    onBeforeSaveCell(row, cellName, cellValue) {
        this.props.workEditData("work/edit",row);
        return true;
    }
    render() {

        const selectRow = {
            mode: 'checkbox',
            bgColor: 'rgb(238, 193, 213)'
        };
        const options = {
            afterDeleteRow: this.onAfterDeleteRow.bind(this),  // A hook for after droping rows.
            afterInsertRow: this.onAfterInsertRow.bind(this),   // A hook for after insert rows
            insertBtn: this.createCustomInsertButton.bind(this)
        };
        const cellEditProp = {
            mode: 'dbclick',
            blurToSave: true,
            beforeSaveCell: this.onBeforeSaveCell.bind(this), // a hook for before saving cell
            afterSaveCell: this.onAfterSaveCell.bind(this)  // a hook for after saving cell
        };
        return ( 
            <div > 
                <BootstrapTable data={this.state.work}
                striped hover
                selectRow={ selectRow }
                cellEdit={ cellEditProp }
                insertRow={ true }
                deleteRow={ true }
                options={ options }
                >
                    <TableHeaderColumn isKey={true} autoValue={ true } dataSort={ true } hiddenOnInsert hidden  dataField='_id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='icon'>Icon</TableHeaderColumn>
                    <TableHeaderColumn dataField='text'>Text</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        work: state.work.work,
        error: state.work.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        workFetchAll: (url) =>  dispatch ( workFetchData( url)),
        workAddData: (url,data) => dispatch ( workAddData( url,data)),
        workEditData: (url,data) => dispatch ( workEditData( url,data)),
        workDelateDatas: (url,data_arr) => dispatch( workDelateDatas( url,data_arr)),
    };
};

Work.propTypes = {
    error: PropTypes.object,
    work: PropTypes.array,
    workFetchAll: PropTypes.func.isRequired,
    workAddData: PropTypes.func.isRequired,
    workEditData: PropTypes.func.isRequired,
    workDelateDatas: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Work);