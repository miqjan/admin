import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import config from '../../../config/index.json';
import {BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';

import {serviceFetchData,serviceAddData,serviceEditData,serviceDelateDatas} from '../../actions/service';
import jQuery from 'jquery';

function carrntFormatter(cell, row, enumObject, index)
{
    return `<img height='30px' width="30px" src="${config.api_url}/images/${cell}"/>`;
}

const colorArr = [
    {
        value:"orange",
        text:"orange",
    },
    {
        value:"gray",
        text:"gray",
    },
    {
        value:"blue",
        text:"blue",
    },
    {
        value:"pink",
        text:"pink",
    },
    {
        value:"darkpurple",
        text:"darkpurple",
    },
    {
        value:"teal",
        text:"teal",
    },
    {
        value:"purple",
        text:"purple",
    },
    {
        value:"green",
        text:"green",
    },
    {
        value:"tealpurple",
        text:"tealpurple",
    },
    {
        value:"bluepurple",
        text:"bluepurple",
    },
    {
        value:"tealgreen",
        text:"tealgreen",
    },
    {
        value:"yellowpurple",
        text:"yellowpurple",
    }
]













class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service:[],
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
        this.props.serviceFetchAll('service');
    }
    componentWillReceiveProps(nextprop) {
        this.setState({service:nextprop.service,images:nextprop.images.images});
    }
    onAfterDeleteRow(rowes){
        this.props.serviceDelateDatas('service/delate',rowes);
    }
    onAfterInsertRow(row){
        this.props.serviceAddData('service',row);
    }
    onAfterSaveCell(row, cellName, cellValue) {}
    onBeforeSaveCell(row, cellName, cellValue) {
        this.props.serviceEditData("service/edit",row);
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
        const jobTypes = this.state.images.map((image,index)=>{
            return {
                value: image,
                text: image,
            };
        });
        
        
        
        return ( 
            <div > 
                <BootstrapTable data={this.state.service}
                striped hover
                selectRow={ selectRow }
                cellEdit={ cellEditProp }
                insertRow={ true }
                deleteRow={ true }
                options={ options }
                >
                    <TableHeaderColumn isKey={true} autoValue={ true } dataSort={ true } hiddenOnInsert hidden  dataField='_id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='img' dataFormat={ carrntFormatter } editable={ { type: 'select', options: { values: jobTypes }  } }>Img</TableHeaderColumn>
                    <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='text' editable={ { type: 'textarea'} }>Text</TableHeaderColumn>
                    <TableHeaderColumn dataField='pre_title'>Pre title</TableHeaderColumn>
                    <TableHeaderColumn dataField='color' editable={ { type: 'select', options: { values: colorArr }  } }>Color</TableHeaderColumn>
                    <TableHeaderColumn dataField='icon'>Icon</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        service: state.service.service,
        error: state.service.error,
        images: state.images,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        serviceFetchAll: (url) =>  dispatch ( serviceFetchData( url)),
        serviceAddData: (url,data) => dispatch ( serviceAddData( url,data)),
        serviceEditData: (url,data) => dispatch ( serviceEditData( url,data)),
        serviceDelateDatas: (url,data_arr) => dispatch( serviceDelateDatas( url,data_arr)),
    };
};

Service.propTypes = {
    error: PropTypes.object,
    service: PropTypes.array,
    serviceFetchAll: PropTypes.func.isRequired,
    serviceAddData: PropTypes.func.isRequired,
    serviceEditData: PropTypes.func.isRequired,
    serviceDelateDatas: PropTypes.func.isRequired,
    images: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(Service);