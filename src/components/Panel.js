import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Panel = ({handleClick, handleName}) => {
	return (
		<div>
			 <TextField hintText="Name"
      			floatingLabelText="Enter Your Name" onKeyUp={handleName}/><br />

      		<TextField hintText="Message"
      			floatingLabelText="Enter Your Message" /><br />
			
			<RaisedButton label="Add" onClick={handleClick}/>

		</div>
	);

}

export default Panel;