import React from 'react';

import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header} >
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']} >
        <img src={headerImage} className={classes.img} alt='Dinner table full of food'/>
      </div>
    </React.Fragment>
  )
}

export default Header;