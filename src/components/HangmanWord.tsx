type HangmanWordProps={
  guessedLetters: string[]
  wordToGuess: string
}
function HangmanWord({guessedLetters, wordToGuess}:HangmanWordProps) {
  
  return (
    <>
      <div className="flex gap-[2.5rem] font-mono text-[6rem] text-black align-center uppercase font-bold"
      >
        {wordToGuess.split("").map((letter,index)=>(
            <span className="border-b-8 border-white" key={index}>
              <span style={{visibility:guessedLetters.includes(letter)?"visible":"hidden",}}>{letter}</span>
            </span>
            
        ))}
      </div>
    </>
  )
}

export default HangmanWord
