import { useEffect, useState } from 'react';
import './App.css';
import Square from './components/Square';


const initialState = [Array.from({ length: 9 })]

function App() {


  const [gameState, setGameState] = useState(initialState)
  const [chanceForX, setChanceForX] = useState(false)


  const _handleSquareClick = (index) => {

    let registerToUpdate = [...gameState]
    registerToUpdate[index] = chanceForX ? 'X' : 'O'
    setGameState(registerToUpdate)
    setChanceForX(!chanceForX)
  }

  const _checkWinner = () => {

    const solutions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],

    ]

    let size = solutions.length

    for (let i = 0; i < size; i++) {

      let [a, b, c] = solutions[i]

      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a]
      }

    }

    return null
  }


  const _restartGame = () => {
    setGameState(initialState)
  }


  useEffect(() => {

    const winner = _checkWinner()

    if (winner) {
      alert("The Winner is " + winner)
      setGameState(initialState)
    }
  }, [gameState])

  return (
    <div className="app-header">
      <p>Hola soy donnis</p>

      <div className="row jc-center">
        <Square state={gameState[0]} onClick={() => _handleSquareClick(0)} />
        <Square state={gameState[1]} onClick={() => _handleSquareClick(1)} />
        <Square state={gameState[2]} onClick={() => _handleSquareClick(2)} />
      </div>

      <div className="row jc-center">
        <Square state={gameState[3]} onClick={() => _handleSquareClick(3)} />
        <Square state={gameState[4]} onClick={() => _handleSquareClick(4)} />
        <Square state={gameState[5]} onClick={() => _handleSquareClick(5)} />
      </div>

      <div className="row jc-center">
        <Square state={gameState[6]} onClick={() => _handleSquareClick(6)} />
        <Square state={gameState[7]} onClick={() => _handleSquareClick(7)} />
        <Square state={gameState[8]} onClick={() => _handleSquareClick(8)} />
      </div>

      <button onClick={_restartGame}>Reiniciar juego</button>

    </div>
  );
}

export default App;
