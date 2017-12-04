import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import _ from 'lodash';
import {addimg, getimages,delateImage} from '../../../src/actions/partner';
import config from '../../../config/index.json';
import styles from './components.pcss';
import previewImg from '../../../public/img/preview.png'

const propTypes = {
    images: PropTypes.array,
    error: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    addimg : PropTypes.func,
    getimages: PropTypes.func,
    delateImage: PropTypes.func,
   
};

class Partner extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            images: []
        };
    }
    componentWillMount(){
        this.props.getimages();
    }
    componentWillReceiveProps(nextprops){
        this.setState( {images: nextprops.images} );
    }
    _handleSubmit(e) {
        e.preventDefault();
        this.props.addimg(this.state.file.name,this.state.imagePreviewUrl);
    }
    _hendleDelateImage(imageName){
        if(confirm('are you sh')){
            this.props.delateImage(imageName);
        }
    }
    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        const isLoading = this.props.isLoading;
        if (imagePreviewUrl) {
            $imagePreview = (<img className={styles.imgPreview} src={imagePreviewUrl}/>);
        } else {
            $imagePreview = (<img className={styles.imgPreview} src={previewImg}/>);
        }
        return (
            <div className = "previewComponent" >
                <form style={{display:'flex'}} onSubmit = {(e) => this._handleSubmit(e)}>
                    <input className="fileInput" type="file" onChange = {(e) => this._handleImageChange(e)}/> 
                    <div style={{marginRight:"20px"}} className="imgPreview"> {$imagePreview} </div>
                    <button style={{height:"30px"}} className="submitButton" disabled={isLoading? 'desabled' : ""} type ="submit" onClick={(e) => this._handleSubmit(e)}>{isLoading? ( <i className="fa fa-circle-o-notch fa-spin"></i>):""}{isLoading? 'Loading': 'Upload'} </button>
                </form> 
                
                <div className='row' style={{borderTop:"1px solid black",marginTop:"10px",height:"0px"}}></div>
                <div className="row">
                    
                    {!_.isEmpty(this.state.images) && this.state.images.map((img_item,key)=>{
                        return(  <div key={key} className={styles.images}>
                             <img src={config.api_url + '/partner_images/'+ img_item}/> 
                             <div className={styles.buttonDelate}>
                                <button onClick={this._hendleDelateImage.bind(this,img_item)}>Delate</button>
                             </div>
                        </div> );
                    })}
                </div> 
            </div>
        );
    }
}


Partner.propTypes = propTypes;
const mapStateToProps = (state) => {
    return {
        images: state.partner.partner,
        error: state.partner.error,
        isLoading: state.partner.isLoading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addimg: (name,data) =>  dispatch ( addimg(name,data) ),
        getimages: () =>  dispatch ( getimages() ),
        delateImage: (name) => dispatch ( delateImage(name)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Partner);

