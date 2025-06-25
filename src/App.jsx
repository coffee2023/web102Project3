// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Flashcards from './components/Flashcards';

const App =() =>{

  return (
    <div className='App'>
      {/* <div className = "header">
        <h1>Study Elementary Math!</h1>
        <h2>Review your addition (pink), subtraction (purple), and multiplication (blue)!</h2>
        <h2>Number of cards: 5 </h2>
        <h2>Current Streak: {props.winStreak}</h2>
      </div> */}
      <div className='Flashcards'>
        <Flashcards />
      </div>
    </div>
  )
}

export default App
