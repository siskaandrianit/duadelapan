import React, { Component } from 'react';

class Calcu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'Tomat',
			title:'Calcu',
			angka1:0,
			angka2:0,
			operation :'plus',
			
		};
	}
  render() {
    return (
	
	<div>
				<span className={"selected "+this.state.color}>
			{this.state.title}
				</span><br/><br/>
				<input type="number" name="angka1" placeholder="angka 1" value={this.state.angka1} onChange={this.changehand.bind(this)}/>
				<select name="operation" onChange={this.changehand.bind(this)}>
				<option value="plus">+</option>
				<option value="minus">-</option>
				<option value="pow">*</option>
				<option value="div">/</option>
				</select>

				   <input type="number" name="angka2" placeholder="angka 2"  value={this.state.angka2} onChange={this.changehand.bind(this)} />=
        			 
					
        			<span> {this.hitung()}</span>
					

				
			</div>
			
    );
  }
  changehand(event){

		this.setState({
			[event.target.name]:event.target.value,
			
		
		});
	}
	hitung(){
console.log(this.state.operation);
	switch(this.state.operation){
	case 'plus' :return parseInt(this.state.angka1) + parseInt(this.state.angka2);
	case 'minus' :return parseInt(this.state.angka1) - parseInt(this.state.angka2);
	case 'pow' :return parseInt(this.state.angka1) * parseInt(this.state.angka2);
	case 'div':return parseInt(this.state.angka1) / parseInt(this.state.angka2);
	}
}
}

export default Calcu;
