import classes from './MealItemForm.module.css'
import Input from '../../Ui/input'

import React, {useRef, useState} from 'react'

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountInNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountInNumber > 5 || enteredAmountInNumber < 1){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountInNumber);
    };

    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input 
                    ref={amountInputRef}
                    label="Amount"
                    input={
                        {
                            id:'amount_' + props.id,
                            type:"number",
                            min:'1',
                            max:'5',
                            step:'1',
                            defaultValue:'1'
                        }
                    }
                />
                <button>+ Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5) </p> }
            </form>
        </>
    )
}

export default MealItemForm
