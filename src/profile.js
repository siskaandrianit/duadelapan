import React, { Component } from 'react';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class Profile extends Component {
	constructor(props) {
		super(props);
		
	}
	clicked = () => {
		toast.notify('Hello world!')

	}
  render() {
    return (
	<div>
		<button onClick={this.clicked}>	alert	</button>
    <h1>{this.props.nama}</h1>
	<img src="pp.jpg" width="400"/>
			</div>
    );
  }
}

export default Profile;
