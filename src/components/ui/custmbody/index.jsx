import React from 'react';
import styles from './component.pcss';
export default class MyCustomBody extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            info: [{
                title:'',
                text:'',
            },]
        }
    }
    
    getFieldValue() {
        const newRow = {};
        
        this.props.columns.forEach((column, i) => {
            if(column.field == 'info'){
                newRow[column.field] = this.state.info.map((obj,index)=>{
                    return{
                        title: this.refs[column.field+index].value,
                        text: this.refs[column.field+'text'+index].value
                    };
                },this);
            }else{
                newRow[column.field] = this.refs[column.field].value;
            }
       
        }, this);
        
        return newRow;
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
        const { columns, validateState } = this.props;
        return (
            <div className='modal-body'>
                
                <div>
                    {
                        this.props.columns.map((column, i) => {
                            const {editable,format,field,name,hiddenOnInsert,dataFormat,autoValue} = column;
                            const error = validateState[field] ? (<span className='help-block bg-danger'>{ validateState[field] }</span>) : null;
                            
                            if (hiddenOnInsert && autoValue) {
                                return(
                                    <div className='form-group' key={ field }>
                                        <input ref={ field } type='text' hidden={true} defaultValue={15555555555555} />
                                    </div>
                                );
                            }
                            if (field == 'info') {
                                return (<div className={styles.text_tittle_group} key={ field+'div' }>
                                            <div style={{display:"flex"}}>
                                                <label></label>
                                                <button onClick={this.addinfoFormGroup.bind(this)} type="button" style={{width:"50px"}} className="btn btn-large btn-block btn-default">+</button>
                                                <button onClick={this.deleteOneInfoFormGroup.bind(this)}type="button" style={{width:"50px"}} className="btn btn-large btn-block btn-danger">-</button>
                                            </div>
                                            {
                                                this.state.info.map((obj,index)=>{
                                                    return( <div key={index }>
                                                                <div className={styles.formgroup}  key={ field+index }>
                                                                    <label>{ name+index }</label>
                                                                    <input ref={ field+index } type='text' defaultValue={ '' } />
                                                                    { error }
                                                                    
                                                                </div>
                                                                <div className={styles.formgroup}  key={ field+'text'+index }>
                                                                    <label></label>
                                                                    <textarea name='info_text_area' ref={ field+'text'+index } value={this.props.children} defaultValue={''}></textarea>
                                                                    { error }
                                                                </div>
                                                            </div>
                                                    );
                                                },this)
                                            }
                                            
                                        </div>
                                    
                                );
                            }
                            if (editable.type && editable.type == 'select') {
                                return (
                                    <div className={styles.formgroup} key={ field }>
                                        <label>{ name }</label>
                                        <select ref={ field } >
                                        {editable.options.values.map((option,index)=>{
                                            return(<option key={index} value={option.value}>{option.text}</option>);
                                        },this)}
                                        </select>
                                        
                                        { error }
                                    </div>
                                );
                            }
                            return (
                                <div className={styles.formgroup} key={ field }>
                                    <label>{ name }</label>
                                    <input ref={ field } type='text' defaultValue={ '' } />
                                    { error }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}