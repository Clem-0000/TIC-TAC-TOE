import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";


const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};





const testHorizontal = (array, player) => {
  for (let index = 0; index < array.length; index += 3) {
    if (array[index] !== null && array[index] === array[index + 1] && array[index + 1] === array[index + 2]) {
      return true
    }
  }
  return false
}

const testVertical = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] !== null && array[index] === array[index + 3] && array[index + 3] === array[index + 6]) {
      return true
    }
  } 
  return false
}

const testDiagonale = (array) => {

  if (array[0] !== null && array[0] === array[4] && array[4] === array[8]) {
    return true
  }
  if (array[2] !== null && array[2] === array[4] && array[4] === array[6]) {
    return true
  }
  return false
}

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      winner: null
    };
  }



  changePlayerValue = (indice) => {

    // récupérer l'indice de la cellule cliquée
    // savoir quel est le nom du joueur, appliqué X ou O et l'insérer dans le tableau à partir de son indice
    const arrayCells = [...this.state.cells] //créé un nouveau tableau prenant tout le tableau contenu dans cell
    if(arrayCells[indice] !== null){
      return;
    }
    if (this.state.currentPlayer === "player 1") {
      arrayCells[indice] = "X"
    }
    else {
      arrayCells[indice] = "O"
    }

    const new_player = this.state.currentPlayer === "player 1" ? "player 2" : "player 1";
 
    this.setState({ cells: arrayCells, currentPlayer: new_player })    
  }

  reset = () => {
    this.setState({ cells: Array(9).fill(null), currentPlayer: "player 1", winner: null })
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {

    const winnerGame = state.currentPlayer === "player 1" ? "player 2" : "player 1";

    if (testHorizontal(state.cells, winnerGame) === true || testVertical(state.cells) === true || testDiagonale(state.cells) === true) {
      return {
        ...state,
        winner: winnerGame 
      }
    }
    return state;
  }
  

  render() {
    return (
      <div
        style={gameLayoutStyle}
      >
        <GameInfo player={this.state.currentPlayer} winner={this.state.winner} />
        <Board board={this.state.cells} joueur={this.state.currentPlayer} changePlayerValue={this.changePlayerValue} blockClick={this.state.winner}/>
        <button onClick={this.reset} >click me</button>

      </div>
    );
  }
}

export default GameLayout;
