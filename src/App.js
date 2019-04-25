import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile.js';
import Calcu from './Calcu.js';
class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			color: 'Merah',
			img:'merah2.jpg',
			title:'Ma-Merah',
		};
	}
	
	clicked(menu) {
		this.setState({
		color:menu.color,
		img:menu.img,
		title:menu.title,
		
		});
	}
	

	info(title){
		if(title == 'Calculator')
		{
			
			return <Calcu/>;//display calc
	
		}
		else if(title=='Profile'){
			return <Profile nama="Ini Mawar Merah"/>;
		}
		else{
			return(
			
		
			<div>
			Ini adalah <span className={"selected "+this.state.color}>
			{this.state.title}</span> <br/> <br/>
			<img src={this.state.img} width="200"> 
			</img>
			</div>
			);
		}
	}
  render() {
    return (
	
		<div id="app">
			<nav className="nav">{ this.props.items.map(( menu, index) => {
				var style = 'menu';
				
				if (this.state.color === menu.color) {
					style = `${style} is-active`;
				}
				
				return <a
					className={style+" "+menu.color}
					
					onClick={this.clicked.bind(this,menu)}
					key={index}
				>
					{menu.title}
				</a>;
			} ) }
			</nav>
			
			
			<div className="info ">
			{this.info(this.state.title)}
			
			
			
			</div>
			
		</div>
			
    );
  }
}

export default App;
