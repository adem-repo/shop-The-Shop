import React, { Fragment } from 'react';
import cx from 'classnames';
import Icon from "../../../Shared/Icon/Icon.tsx";
import phoneIcon from '../../../../assets/images/phone.png';

import classes from './ContactItem.module.scss';

const contactItem = props => {
	return (
		<div className={classes.contactItem}>
			<Icon classNames='top_bar_icon' src={phoneIcon}/>
			<div>{props.children}</div>
		</div>
	);
};

export default contactItem;