type HangmanDrawingProps={
  numberOfGuesses:number
}

const HEAD = (<div className="bg-black size-12 mt-12 -mx-8 rounded-full"></div>)
const BODY = (<div className="bg-black w-2 -mx-3 h-32 "></div>)
const LEFT_ARM = (<div className="absolute inset-y-28 -right-1 bg-black ml-3 h-2 w-32"></div>)
const RIGHT_ARM = (<div className="absolute inset-y-28 right-[132px] bg-black h-2 w-32"></div>)
const LEFT_LEG = (<div className="absolute bg-black h-2 w-32 -inset-x-20 inset-y-90 mt-2 -bottom-[210px] rotate-[260deg]"></div>)
const RIGHT_LEG = (<div className="absolute bg-black h-2 w-32 -inset-x-20  inset-y-60 ml-14 -bottom-[210px] rotate-[20deg]"></div>)

const BODY_PARTS=[HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG]

function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {


  return (
    <>
      <div className="absolute ml-80 inset-y-96 border-y-slate-100 border-l-8 bottom-0 w-72 h-72 "></div>
      <div className="ml-80  border-y-slate-100 border-b-8 w-80 h-32"></div>
      <div className="absolute ml-[600px] inset-y-[23rem] right-[300px] border-y-slate-100 border-l-8 bottom-0  w-32 h-16">{BODY_PARTS.slice(0,numberOfGuesses)}</div>
    </>
  )
}

export default HangmanDrawing
