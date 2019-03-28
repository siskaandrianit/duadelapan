import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
	//menuSaya(){
		//var gambar;
		//if(this.state.active.toLowerCase() === 'merah'){
		//gambar="apel";}
		//else if(this.state.active.toLowerCase() === 'kuning'){
		//gambar="lemon";}
		//else if(this.state.active.toLowerCase() === 'hijau'){
		//gambar="mangga";}
		//else if(this.state.active.toLowerCase() === 'biru'){
		//gambar="mawar";}
		//return <img src= {gambar+".jpg"} width="200"></img>
	//}
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
			
			Ini adalah <span className={"selected "+this.state.color}>{this.state.title}</span> <br/> <br/>
		<img src={this.state.img} width="200"> 
		</img>
			
			
			</div>
		</div>
			
    );
  }
}

export default App;
