import{ useState } from 'react'
import Gamer from './components/Gamer'
import Timer from './components/Timer'
import Alert from './components/Alert'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [round, setRound] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);

  const initGame = () => {
    setGameStarted(true);
  }

  const nextRound = (tentativa) => {
    if (tentativa) {
      setCorrect(prevCorrect => prevCorrect + 1);
    }
    if (round < 10) {
      setRound(prevRound => prevRound + 1);
      setTime(0);
    }else if (round === 10) {
      setGameStarted(false);
    }
  }

  return (
    <div className="bg-bg-color min-h-screen flex items-center justify-center">
      <Alert initGame={initGame}/>
      <main className='p-7 bg-main-color text-white rounded-sm shadow-lg flex flex-col sm:flex-row items-center'>
        <Gamer gameStarted={gameStarted} nextRound={nextRound} round={round} correct={correct}/>
        <Timer gameStarted={gameStarted} nextRound={nextRound} round={round} correct={correct}  time={time} setTime={setTime}/>
      </main>
    </div>
  )
}

export default App