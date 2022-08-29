import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component{
    render(){
        return(
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="tasks">    
                        Add a new study
                    </label>
                    <input 
                    type="text"
                    name="tasks"
                    id="tasks"
                    placeholder="What do you want to study?"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input  
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                    <Button
                    > Add </Button>
                </div>
            </form>
        )
    }
}

export default Form