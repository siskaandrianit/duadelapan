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
		angka1:0,
		angka2:0,
		});
	}
	info(title){
		if(title == 'Calculator')
		{
			
			//display calc
			return(
			<div>
				<span className={"selected"+this.state.color}>{this.state.title}
				</span><br/><br/>
				<input type="number" name="angka1" placeholder="angka 1" value={this.state.angka1} onChange={this.changehand.bind(this)}/>
				<select ref="operator" className="from-control">
       <option value="+">+</option>
       <option value="-">-</option>
       <option value="*">*</option>
       <option value="/">/</option>
       </select>

				   <input type="number" name="angka 2" placeholder="angka 2"  value={this.state.angka2} onChange={this.changehand.bind(this)} />=
        			 <span>{this.state.angka1}</span><br/><br/>
        			 
					

				
			</div>
			);
		}else{
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
	changehand(event){

		this.setState({
		angka1:event.target.value
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
			{this.info(this.state.title)}
			
			
			
			</div>
			
		</div>
			
    );
  }
}

export default App;
