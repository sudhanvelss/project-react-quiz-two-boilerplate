import Quiz from './components/quizPage'
import './App.css'
import questions from '../resources/quizQuestion.json'

function App() {
  return(
    <div>
      <Quiz questions = {questions}/>
    </div>
  )
}

export default App