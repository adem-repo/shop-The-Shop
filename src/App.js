import React, { Component } from 'react';
import {connect} from 'react-redux';
import { IntlProvider } from "react-intl";
import messages from "./assets/lang/messages";

import classes from './App.module.scss';

import {increment, decrement} from './store/actions';
import Header from "./components/Header/Header";

class App extends Component {

    render () {

        return (
            <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]}>
                <div className={classes.super_container}>
                    <Header />
                </div>
            </IntlProvider>
        );
    }

}

export default connect(
    store => ({
        lang: store.user.lang
    })
)(App);
