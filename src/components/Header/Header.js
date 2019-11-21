import React, { Component } from 'react';
import classes from './Header.module.scss';

import TopBar from "./TopBar/TopBar";

export class Header extends Component {

    render() {

        return (
            <header className={classes.header}>
                <TopBar />
            </header>
        )
    }
}

export default Header;