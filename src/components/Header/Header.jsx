import React from 'react';
import classes from "./Header.module.css";

function Header() {
    return(
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'/>
        </header>
    )
}
export default Header;