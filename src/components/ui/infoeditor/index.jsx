import React from 'react';
import styles from '../custmbody/component.pcss';
export default class InfoEditor extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = {
            info: props.defaultValue,
            open: true
        };
    }
    // focus() {
    //     this.refs.inputRef.focus();
    // }
    updateData() {
        const sendArr = (this.state.info.map((obj,index)=>{
            return{
                title: this.refs[index].value,
                text: this.refs['text'+index].value
            };
        },this));
        this.props.onUpdate(sendArr);
    }
    close = () => {
        this.setState({ open: false });
        this.props.onUpdate(this.props.defaultValue);
    }
    addinfoFormGroup(){
        this.setState({info: [...this.state.info,{title:'',text:''}]});
    }
    deleteOneInfoFormGroup(){
        let tempArr = Object.assign(this.state.info);
        tempArr.pop();
        this.setState({info: tempArr});
    }
    render() {
        const fadeIn = this.state.open ? 'in' : '';
        const display = this.state.open ? 'block' : 'none';
        return (
                <div className={ `modal ${fadeIn}` } id='myModal' role='dialog' style={ { display } }>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-body'>
                            <div style={{display:"flex"}}>
                                <label></label>
                                    <button onClick={this.addinfoFormGroup.bind(this)} type="button" style={{width:"50px"}} className="btn btn-large btn-block btn-default">+</button>
                                    <button onClick={this.deleteOneInfoFormGroup.bind(this)}type="button" style={{width:"50px"}} className="btn btn-large btn-block btn-danger">-</button>
                                </div>
                                {this.state.info.map((obj,index)=>{
                                    return( <div key={index }>
                                                <div className={styles.formgroup}  key={index }>
                                                    <label>{"info"+index }</label>
                                                    <input ref={index} type='text' defaultValue={ obj.title } />
                                                    
                                                    
                                                </div>
                                                <div className={styles.formgroup}  key={'text'+index }>
                                                    <label></label>
                                                    <textarea name='info_text_area' ref={'text'+index } value={this.props.children} defaultValue={obj.text}></textarea>
                                                   
                                                </div>
                                            </div>
                                    );
                                },this)}
        {   /*                         <input ref='inputRef' className={ ( this.props.editorClass || '') + ' form-control editor edit-text' }
                                style={ { display: 'inline', width: '50%' } }
                                type='text'
                                value={ this.state.name }
                            onChange={ e => { this.setState({ name: e.currentTarget.value }); } } />*/}
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-primary' onClick={ this.updateData }>Save</button>
                                <button type='button' className='btn btn-default' onClick={ this.close }>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}