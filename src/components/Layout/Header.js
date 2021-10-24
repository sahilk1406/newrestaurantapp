import React from 'react'
import classes from './Header.module.css';
import meals from '../../assets/images/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Awesome Meals</h1>
                <HeaderCartButton onClick={props.onCartShown}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="Mealsimg" />
            </div>
        </>
    )
}

export default Header

