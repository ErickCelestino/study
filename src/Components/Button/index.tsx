import React from 'react';
import style  from './Button.module.scss';
//É necessário dizer de onde vem a propriedade children
class Button extends React.Component <{children: React.ReactNode, type?:"button" | "submit" | "reset" }>{
    render(){
        const {type = "button"} = this.props;
        return(
            //leaving the dynamic button
            <button type={type} className={style.button}>
                
                {this.props.children}
            </button>
        )
    }
}
export default Button