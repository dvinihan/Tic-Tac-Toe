import React, { Component } from 'react';
import './App.css';

class TicTacToeBoard extends Component {
		
  render() {
    return (
      <div className = "board">
        <div onClick={this.props.onclick} className ="one spot"></div>
        <div onClick={this.props.onclick} className ="two spot"></div>
        <div onClick={this.props.onclick} className ="three spot"></div>
        <div onClick={this.props.onclick} className ="four spot"></div>
        <div onClick={this.props.onclick} className ="five spot"></div>
        <div onClick={this.props.onclick} className ="six spot"></div>
        <div onClick={this.props.onclick} className ="seven spot"></div>
        <div onClick={this.props.onclick} className ="eight spot"></div>
        <div onClick={this.props.onclick} className ="nine spot"></div>
      </div>
    );
  }
}

class App extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.updateDOM = this.updateDOM.bind(this);
		this.state = {
			isXsTurn: true
		}
	}
	
	updateDOM(spot, team){
			spot.innerHTML = team;		
			this.setState({isXsTurn: team === "O" ? true : false});
			document.getElementsByClassName("turn")[0].innerHTML = `It's ${this.state.isXsTurn ? "O" : "X"}'s turn`;
	}
	
	handleClick(e) {
		if(e.target.innerHTML !== ""){
			return;
		}
			 
		if(this.state.isXsTurn){
			this.updateDOM(e.target, "X");
		} 
		else {
			this.updateDOM(e.target, "O");
		}
		
	}
	
  render() {
    return (
      <div className="App">
        <h1 className="header">Tic Tac Toe</h1>
				<div className = "turn">It's X's turn</div>

        <TicTacToeBoard  onclick={this.handleClick} />


      </div>
    );
  }
}

export default App;
