import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../CartContext/CartContext'


const HeaderCartButton = (props) => {

    const cardContextData = useContext(CartContext);
    const numberOfItems = cardContextData.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount; 
    },0);

    return (
        <>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}> {numberOfItems} </span>
            </button>
        </>
    )
}

export default HeaderCartButton
