import { connect } from 'react-redux';
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import darkBlack from 'material-ui/styles/colors';


const Twits = ({twits}) => {

    var renderT = twits.map((t, index) => {
    	let imgSrc = `https://s3.us-east-2.amazonaws.com/r3-village/avatars/avatar${t.imgid}.png`;

        return (
            <div key={index}>
        	<ListItem
        	leftAvatar={<Avatar src={imgSrc} />}
        	primaryText={t.note}
        	secondaryText={
        		<p>
        			<span style={{color: darkBlack}}>@{t.name}</span> -- {t.time.toLocaleString()}
        		</p>
        	}
        	/>
             <Divider inset={true} />
             </div>
        )
    });
   
	return <List> { renderT } </List>
}

function mapStateToProps(state) {
  return { twits: state.twits };
}

export default connect(mapStateToProps)(Twits);