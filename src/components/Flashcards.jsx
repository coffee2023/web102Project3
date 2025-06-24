import React from 'react';
import { useState } from 'react';
import NewCard from '../components/NewCard';
import num2 from '../images/number2.png'
import num5 from '../images/number5.jpeg'

// ******************************!!!!!!!
const Flashcards = () =>{
    //array of cards
    const cardsList = [
        {
            question: <NewCard text = "1+1"  color = "pink"/>,
            answer: <NewCard text = {<img src={num2} alt = "num2"></img>}  color = "pink"/>
        },  
        {
            question: <NewCard text = "2 * 2"  color = "blue"/>,
            answer: <NewCard text = "4"  color = "blue"/>
        }
        ,
        {
            question: <NewCard text = "10 - 5"  color = "purple"/>,
            answer: <NewCard text = {<img src={num5} alt = "num2"></img>}  color = "purple"/>
        }
        ,
        {
            question: <NewCard text = "4 * 4"  color = "blue"/>,
            answer: <NewCard text = "16"  color = "blue"/>
        }
        ,
        {
            question: <NewCard text = "24 + 2"  color = "pink"/>,
            answer: <NewCard text = "26"  color = "pink"/>
        }
    ];

    //index will start at 0 of the cardsList array
    const[currentCard, setCurrentCard] = useState(0);

    const prevCard = () =>{
        setCurrentCard(currentCard - 1);{/*will decrease the index of the cardsList array so that the previous card is displayed*/}

        setFlip(false);{/* need to set to false everytime the back btn is clicked so that the previous card is
                            the 'question' and not the 'answer' if flip is set to 'true' at time when btn is pressed*/}
    }
    const nextCard = () =>{
        setCurrentCard(currentCard + 1);{/*will increase the index of the cardsList array so that the next card is displayed*/}

        setFlip(false);  {/* need to set to false everytime the next btn is clicked so that the next card is
                            the 'question' and not the 'answer' if flip is set to 'true' at time when btn is pressed*/}
    }
    const [flip, setFlip] = useState(false);

    const [spice, setSpice] = useState("");
    const handleSubmit = (event) => {
        alert (`The spice you enteres was ${spice}`);
    }
    return (
        <div className="Flashcards">
            <br></br>
            <div onClick={() => setFlip(!flip)} className = "insideCard">
                
                {/* {cardsList[currentCard].question}
                {cardsList[currentCard].answer} */}
                 
                {flip ? cardsList[currentCard].answer: cardsList[currentCard].question }
            </div>
            
            <form onSubmit = {handleSubmit}>
                <input type = "text" value ={spice} onChange = {(event) => setSpice(event.target.value)}/>
                <input type = "submit"/>
            </form>
            <button onClick = {prevCard}>Back</button>
            <button onClick = {nextCard}>Next</button>
            

        </div>
    )
}

export default Flashcards;