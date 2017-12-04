import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import config from '../../../config/index.json';
import {BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';

import {galleryFetchData,galleryAddData,galleryEditData,galleryDelateDatas} from '../../actions/gallery';
import jQuery from 'jquery';
import MyCustomBody from '../../components/ui/custmbody';
import InfoEditor from '../../components/ui/infoeditor';

function carrntFormatter(cell, row, enumObject, index)
{
    return `<img height='30px' width="30px" src="${config.api_url}/images/${cell}"/>`;
}

function carrntFormatterInfo(cell, row, enumObject, index){
    return `${cell.length} Object{title and text}`;
    
}

const createInfoEditor = (onUpdate, props) => (<InfoEditor onUpdate={ onUpdate } {...props}/>);
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallerys:[],
            images:[],
        };
    }
    handleInsertButtonClick = (onClick) => {
        onClick();
    }
    createCustomInsertButton = (onClick) => {
        return (
            <InsertButton
            btnText='Add Gallery'
            btnContextual='btn'
            className='my-custom-class'
            btnGlyphicon='glyphicon-edit'
            onClick={ () => this.handleInsertButtonClick(onClick) }/>
        );
    }
    componentWillMount() {
        this.props.galleryFetchAll('gallery');
    }
    componentWillReceiveProps(nextprop) {
        this.setState({gallerys:nextprop.gallerys,images:nextprop.images.images});
    }
    onAfterDeleteRow(rowes){
        this.props.galleryDelateDatas('gallery/delate',rowes);
    }
    onAfterInsertRow(row){
        this.props.galleryAddData('gallery',row);
        return false;
    }
    onAfterSaveCell(row, cellName, cellValue) {}
    onBeforeSaveCell(row, cellName, cellValue) {
        
        this.props.galleryEditData("gallery/edit",row);
        return true;
    }
    createCustomModalBody = (columns, validateState, ignoreEditable) => {
        return (
          <MyCustomBody columns={ columns }
            validateState={ validateState }
            ignoreEditable={ ignoreEditable }/>
        );
    }
    render() {

        const selectRow = {
            mode: 'checkbox',
            bgColor: 'rgb(238, 193, 213)'
        };
        const options = {
            afterDeleteRow: this.onAfterDeleteRow.bind(this),  // A hook for after droping rows.
            afterInsertRow: this.onAfterInsertRow.bind(this),   // A hook for after insert rows
            insertBtn: this.createCustomInsertButton.bind(this),
            insertModalBody: this.createCustomModalBody
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
            <div key={'keyyyy'}> 
                <BootstrapTable data={this.state.gallerys}
                striped hover
                selectRow={ selectRow }
                cellEdit={ cellEditProp }
                insertRow={ true }
                deleteRow={ true }
                options={ options }
                
                >
                    <TableHeaderColumn isKey={true} autoValue={ true } dataSort={ true } hiddenOnInsert hidden  dataField='_id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='img' dataFormat={ carrntFormatter } editable={ { type: 'select', options: { values: jobTypes }  } }>Img</TableHeaderColumn>
                    <TableHeaderColumn dataField='img_hover' dataFormat={ carrntFormatter } editable={ { type: 'select', options: { values: jobTypes }  } }>Img Hover</TableHeaderColumn>
                    <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='site_url'>Site url</TableHeaderColumn>
                    <TableHeaderColumn dataField='video'>Video</TableHeaderColumn>
                    <TableHeaderColumn dataField='info' dataFormat={ carrntFormatterInfo } customEditor={ { getElement: createInfoEditor } }>Info</TableHeaderColumn>
                    <TableHeaderColumn dataField='site'>Site</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gallerys: state.gallerys.gallery,
        error: state.gallerys.error,
        images: state.images,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        galleryFetchAll: (url) =>  dispatch ( galleryFetchData( url)),
        galleryAddData: (url,data) => dispatch ( galleryAddData( url,data)),
        galleryEditData: (url,data) => dispatch ( galleryEditData( url,data)),
        galleryDelateDatas: (url,data_arr) => dispatch( galleryDelateDatas( url,data_arr)),
    };
};

Gallery.propTypes = {
    error: PropTypes.object,
    gallerys: PropTypes.array,
    galleryFetchAll: PropTypes.func.isRequired,
    galleryAddData: PropTypes.func.isRequired,
    galleryEditData: PropTypes.func.isRequired,
    galleryDelateDatas: PropTypes.func.isRequired,
    images: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);