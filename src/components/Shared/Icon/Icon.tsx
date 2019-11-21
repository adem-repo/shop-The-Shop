import * as React from 'react';

interface IconProps {
	classNames: string
	src: string
}

const Icon: React.FC<IconProps> = props => {

	return (
		<div className={props.classNames}>
			<img src={props.src} alt="" />
		</div>
	)
};

export default Icon;