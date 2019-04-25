import React, { Component } from 'react';


class Profile extends Component {
	constructor(props) {
		super(props);
		
	}
  render() {
    return (
	<div>
    <h1>{this.props.nama}</h1>
	<img src="pp.jpg" width="400"/>
			</div>
    );
  }
}

export default Profile;
