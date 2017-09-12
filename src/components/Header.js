import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const Header = ({name}) => {
	let greeting=`Hello ${name}`;
	return (
		<Card>
			<CardMedia overlay={<CardTitle title={greeting} subtitle="chat" />} >
      			<img src="https://s3.us-east-2.amazonaws.com/let-us-go/events/10.jpg" alt="pic" />
    		</CardMedia>
		</Card>
	);

}

export default Header;