import React, {Component} from "react";
import './Quiz.css'

class Quiz extends Component{
    constructor(props){
        super(props)
        this.questions = props.questions
        this.state = {
            qno: 0
        }
    }
    next = () => {
        const qno = this.state.qno + 1
        if (qno < 15) {
            this.setState(
                {qno: qno}
            )
        }
    }
    previous = () => {
        const qno = this.state.qno - 1
        if (qno >= 0 ){
            this.setState({qno: qno})
        }
    }
    quit = () => {
        prompt('Are you sure you want to quit')

    }
    render(){
        const questions = this.questions
        const qno = this.state.qno
        return(
            <div className="quiz">
                <h1>Question</h1>
                <p id="questionNumber">{qno + 1} of 15</p>
                <h4 id="question">{questions[qno].question}</h4>
                <div id="Optionbuttons">
                    <button>{questions[qno].optionA}</button>
                    <button>{questions[qno].optionB}</button>
                    <button>{questions[qno].optionC}</button>
                    <button>{questions[qno].optionD}</button>
                </div>
                <div id ='navigation'>
                    <button id='prevBtn' onClick={this.previous}>Previous</button>
                    <button id='nextBtn' onClick={this.next}>Next</button>
                    <button id='quitBtn' onClick={this.quit}>Quit</button>
                </div>
            </div>
        )
    }
}
export default Quiz