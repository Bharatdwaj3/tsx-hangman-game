import words from '../wordList_rus.json'
import {useCallback, useState} from 'react'

import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'
function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function Game() {
const[guessedLetters, setGuessedLetters] = useState<string[]>(([]))
const [wordToGuess, setWordToGuess] =useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
})
 const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
console.log(wordToGuess)
const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))
const addGuessedLetter =  useCallback(
    (letter:string)=>{
        if(guessedLetters.includes(letter))
            return
        setGuessedLetters(currentLetters=>[...currentLetters,letter])
    },
    [guessedLetters]
)
 
const inCorrectLetters= guessedLetters.filter(letter=>!wordToGuess.includes(letter))

 const resetGame = () => {
    setGuessedLetters([]);
    setWordToGuess(getWord());
  };


  const handleClick = () => {
    if (isWinner || isLoser) {
      resetGame();
    }
  };

  return (
    <>
      <div className="bg-slate-800 w-full h-[1900px] relative">
        <div className="mx-36 bg-red-400 absolute -inset-y-72 top-[90px] w-[1070px] h-[760px] border-b-red-950">
             <div className="bg-sky-700 h-1/3 w-full ">
              <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
            </div>
            <div className="bg-sky-900 h-2/3 w-full ">
                <HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>
            </div>
        </div>
        <div className="mx-36 bg-lime-400 absolute -inset-y-72 top-[850px] w-[1070px] h-[760px]">
            <div className="bg-yellow-700 h-1/3 w-full">
            
                <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
                
             
            </div>
            <div className="bg-yellow-900 h-2/3 w-full ">
                <Keyboard activeLetters={guessedLetters.filter(letter=>wordToGuess.includes(letter))}
                    inactiveLetters={inCorrectLetters}
                    addGuessedLetters={addGuessedLetter}/>
            </div>
        </div>
         <button onClick={handleClick} className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded">
        Reset Game
      </button>
      </div>
      
    </>
  );
}

export default Game;
