import React, {Component} from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

import classes from './TopBar.module.scss';

import {Container, Row, Col} from "react-bootstrap";
import Icon from "../../Shared/Icon/Icon.tsx";

import { setUserLang } from '../../../store/actions/user/actions';

import userIcon from '../../../assets/images/user.svg';
import mailIcon from '../../../assets/images/mail.png';
import phoneIcon from '../../../assets/images/phone.png';



class TopBar extends Component {

	onChangeUserLang = (event, lang) => {
		event.preventDefault();
		this.props.changeUserLang(lang)
	};

	render() {

		return (
			<div className={classes.topBar}>
				<Container>
					<Row>
						<Col className={cx('d-flex', 'flex-row')}>
							<div className={classes.topBarContactItem}>
                                <Icon classNames={classes.topBarIcon} src={phoneIcon}/>
                                +38 068 005 3570
							</div>
							<div className={classes.topBarContactItem}>
                                <Icon classNames={classes.topBarIcon} src={mailIcon}/>
                                <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
							<div className='ml-auto'>
								<div className={classes.topBarMenu}>
									<ul className={cx(classes.standardDropdown, classes.topBarDropdown)}>
										<li>
											<a href="#" onClick={event => this.onChangeUserLang(event, 'en-US')}>English<i className="fas fa-chevron-down"/></a>
											<ul>
												<li><a href="#" onClick={event => this.onChangeUserLang(event, 'ru-RU')}>Русский</a></li>
											</ul>
										</li>
										<li>
											<a href="#">$ US dollar<i className="fas fa-chevron-down"/></a>
											<ul>
												<li><a href="#">EUR Euro</a></li>
												<li><a href="#">GBP British Pound</a></li>
												<li><a href="#">JPY Japanese Yen</a></li>
											</ul>
										</li>
									</ul>
								</div>
								<div className={classes.topBarUser}>
									<Icon classNames={classes.userIcon} src={userIcon}/>
									<div><a href="#">
										<FormattedMessage id='header.topBar.signUp' defaultMessage='Register'/>
									</a></div>
									<div><a href="#">
										<FormattedMessage id='header.topBar.signIn' defaultMessage='Sign In'/>
									</a></div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = store => ({
	lang: store.user.lang
});

const mapDispatchToProps = dispatch => ({
	changeUserLang: (lang) => dispatch(setUserLang(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);