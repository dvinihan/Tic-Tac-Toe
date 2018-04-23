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
		this.checkForWinner = this.checkForWinner.bind(this);
		this.allThreeSame = this.allThreeSame.bind(this);
		this.checkForCatsGame = this.checkForCatsGame.bind(this);

		this.state = {
			isXsTurn: true,
			gameOn: true
		}
	}
	
	allThreeSame(a, b, c){
		if(a === ""){
			return false;
		}
		if(a === b && b === c){
			return true;
		}
		else return false;
	}
	
	checkForCatsGame(){
		for(let i = 0; i < 9; i++){
			if(document.getElementsByClassName("spot")[i].innerHTML === ""){
				//there is still at least one open space
				return;
			}
		}
		
		//no open spaces left
		//end game
		document.getElementsByClassName("turn")[0].innerHTML = "Game over. Cat's game.";
		this.setState({gameOn: false});
	}
	
	checkForWinner(){
		//could do this by looping thorugh each element, but...
		let one = document.getElementsByClassName('one')[0].innerHTML;
		let two = document.getElementsByClassName('two')[0].innerHTML;
		let three = document.getElementsByClassName('three')[0].innerHTML;
		let four = document.getElementsByClassName('four')[0].innerHTML;
		let five = document.getElementsByClassName('five')[0].innerHTML;
		let six = document.getElementsByClassName('six')[0].innerHTML;
		let seven = document.getElementsByClassName('seven')[0].innerHTML;
		let eight = document.getElementsByClassName('eight')[0].innerHTML;
		let nine = document.getElementsByClassName('nine')[0].innerHTML;

		//check for all possible wins
		if(this.allThreeSame(one, two, three) || this.allThreeSame(four, five, six) || this.allThreeSame(seven, eight, nine) || this.allThreeSame(one, four, seven) || this.allThreeSame(two, five, eight) || this.allThreeSame(three, six, nine) || this.allThreeSame(one, five, nine) || this.allThreeSame(three, five, seven)){
			
			//display winner
				document.getElementsByClassName("turn")[0].innerHTML = `Game over. ${this.state.isXsTurn ? "X" : "O"} wins!`;
			
						//stop game	
						this.setState({gameOn: false});
			}
			
		
		}
	
	updateDOM(spot, team){
			spot.innerHTML = team;		
			this.setState({isXsTurn: team === "O" ? true : false});
			document.getElementsByClassName("turn")[0].innerHTML = `It's ${this.state.isXsTurn ? "O" : "X"}'s turn`;
	}
	
	handleClick(e) {
		if(!this.state.gameOn){
			return;
		}
		
		if(e.target.innerHTML !== ""){
			return;
		}
			 
		if(this.state.isXsTurn){
			this.updateDOM(e.target, "X");
		} 
		else {
			this.updateDOM(e.target, "O");
		}
		
		this.checkForWinner();
		this.checkForCatsGame();
		
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
