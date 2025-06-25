import React from 'react';
import { useState } from 'react';
import NewCard from '../components/NewCard';
import num2 from '../images/number2.png'
import num5 from '../images/number5.jpeg'

const Flashcards = () =>{    
    {/******array of cards*************************************************************/}
    const cardsList = [
        {
            question: <NewCard text = "1+1"  color = "pink"/>,
            answer: <NewCard text = {<img src={num2} alt = "num2"></img>}  color = "pink"/>,
            numericAnswer: 2
        },  
        {
            question: <NewCard text = "2 * 2"  color = "blue"/>,
            answer: <NewCard text = "4"  color = "blue"/>,
            numericAnswer: 4
        }
        ,
        {
            question: <NewCard text = "10 - 5"  color = "purple"/>,
            answer: <NewCard text = {<img src={num5} alt = "num2"></img>}  color = "purple"/>,
            numericAnswer: 5
        }
        ,
        {
            question: <NewCard text = "4 * 4"  color = "blue"/>,
            answer: <NewCard text = "16"  color = "blue"/>,
            numericAnswer: 16
        }
        ,
        {
            question: <NewCard text = "24 + 2"  color = "pink"/>,
            answer: <NewCard text = "26"  color = "pink"/>,
            numericAnswer: 26
        }
    ];
    
    {/**********************************************************************************
    will keep track of the current flashcard displayed with the useState hook.     */}
    const[currentCard, setCurrentCard] = useState(0); {/*index will start at 0 of the cardsList array*/}

    {/********************************************************************************
    will keep track of whether the card is flipped or not.**/}
    const [flip, setFlip] = useState(false);

    {/********************************************************************************
    functions for the next and previous buttons    **/}    
    const isAtStart = () => currentCard === 0;
    const isAtEnd = () => currentCard === cardsList.length - 1;
    const prevCard = () =>{
        
        if(!isAtStart()){
            setCurrentCard(currentCard - 1);    {/*will decrease the index of the cardsList array so that the previous card is displayed*/}
            setFlip(false);     {/* need to set to false everytime the back btn is clicked so that the previous card is the 'question' and not the 'answer' if flip is set to 'true' at time when btn is pressed*/}
            myInput.classList.remove("incorrect");
            myInput.classList.remove("correct"); 
            setAnswer(""); //clear input
        }
    }
    const nextCard = () =>{
        
        if (!isAtEnd()){
            setCurrentCard(currentCard + 1);    {/*will increase the index of the cardsList array so that the next card is displayed*/}
            setFlip(false);  {/* need to set to false everytime the next btn is clicked so that the next card is the 'question' and not the 'answer' if flip is set to 'true' at time when btn is pressed*/}
            myInput.classList.remove("incorrect");
            myInput.classList.remove("correct");
            setAnswer(""); //clear input
        }
    }
    
    {/******************************************************************************** 
    will set the win streak of correct answers in a row or set to 0 if incorrect answer entered */}
    const [inputAnswer, setAnswer] = useState("");
    const[winStreak, setWinStreak] = useState(0);
    
    const checkAnswer = () =>{
        const myInput = document.getElementById("myInput");
        if (inputAnswer == cardsList[currentCard].numericAnswer){
            setWinStreak(winStreak + 1);
            myInput.classList.remove("incorrect");
            myInput.classList.add("correct");
        }
        else{
            setWinStreak(0);
            myInput.classList.remove("correct");
            myInput.classList.add("incorrect");
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        checkAnswer();
    }
    {/*******************************************************************************/}
    
    return (
        <div className="Flashcards">
            <div className = "header">
            <h1>Study Elementary Math!</h1>
            <h2>Review your addition (pink), subtraction (purple), and multiplication (blue)!</h2>
            <h2>Number of cards: 5 </h2>
            <h2>Current Streak: {winStreak}</h2>
        </div>
            <br></br>
            <div onClick={() => setFlip(!flip)} className = "insideCard">
                {flip ? cardsList[currentCard].answer: cardsList[currentCard].question }
            </div>
            
            <form id ="form" onSubmit = {handleSubmit}> 
                <input type = "text" id="myInput" placeholder='Enter Answer' value ={inputAnswer} onChange = {(event) => setAnswer(event.target.value)}/>
                <input type = "submit"/>
            </form>
            <br></br>
            <button disabled = {isAtStart()} onClick = {prevCard}>Back</button>
            <button disabled = {isAtEnd()} onClick = {nextCard}>Next</button>
            

        </div>
    )
}

export default Flashcards;