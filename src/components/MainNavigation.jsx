import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li><NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/' end>HOME</NavLink></li>
        <li><NavLink  className={({isActive}) => isActive ? classes.active : undefined} to='/products'>PRODUCTS</NavLink></li>
      </ul>
    </header>
  )
}

export default MainNavigation
