import React, { useState,useEffect } from 'react'

function App() {

  const [commentary, setCommentary] = useState(["> welcome"])
  const [computerScore, setComputerScore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [gameOverMsg, setGameOverMsg] = useState("")

  useEffect(() => {
    setTimeout(
      () => {
        checkScore()
      },200
    )
  })

  const computerPlay = () => {
    const array = ['rock', 'paper', 'scissors']
    const computer = Math.floor((Math.random() * array.length))
    return array[computer];
   }

  const game = (pick) => {
    const player = pick
    const computer = computerPlay()
    if(computer === "rock" && player === "paper"){
      setCommentary(commentary.concat("> bot uses rock, you win"))
      setPlayerScore(playerScore + 1)
    }else if(computer === "rock" && player === "scissors"){
      setCommentary(commentary.concat("> bot uses rock, you lose"))
      setComputerScore(computerScore + 1)
    }else if(computer === "paper" && player === "rock"){
      setCommentary(commentary.concat("> bot uses paper, you lose"))
      setComputerScore(computerScore + 1)
    }else if(computer === "paper" && player === "scissors"){
      setCommentary(commentary.concat("> bot uses paper, you win"))
      setPlayerScore(playerScore + 1)
    }else if(computer === "scissors" && player === "rock"){
      setCommentary(commentary.concat("> bot uses scissors, you win"))
      setPlayerScore(playerScore + 1)
    }else if(computer === "scissors" && player === "paper"){
      setCommentary(commentary.concat("> bot uses scissors, you lose"))
      setComputerScore(computerScore + 1)
    }else{
      setCommentary(commentary.concat("> it's a draw"))
    }
  }

  const checkScore = () => {
    if(playerScore === 5){
      setIsPlaying(false)
      setGameOverMsg("You win")
    }else if(computerScore === 5){
      setIsPlaying(false)
      setGameOverMsg("BOT wins")
    }
  }

  const screen = () => {
    if(isPlaying === true){
      return (
        <div className="font-mono my-16 md:my-40">
              <div className="flex justify-center mb-16 ">
              <p className="text-4xl md:text-6xl">BOT vs MAN</p>
              </div>
              <div className="flex justify-center mb-2 text-lg">
              <h3>Choose your weapon!</h3>
              </div>
              <div className="flex justify-center space-x-2">
              <button className="border rounded p-1 w-20 md:w-32" onClick={() => game("rock")}>rock</button>
              <button className="border rounded p-1 w-20 md:w-32" onClick={() => game("paper")}>paper</button>
              <button className="border rounded p-1 w-20 md:w-32" onClick={() => game("scissors")}>scissors </button>
          </div>

          <div className="flex justify-center my-4">
            <div className="border rounded p-2 md:ml-2">
              <div className="flex flex-col md:flex-row justify-between">
                <h2 className="font-bold mx-2 md:mx-4">Terminal</h2>
                <p className="text-sm md:text-base">| BOT Score : {computerScore} | Your Score : {playerScore} |</p>
              </div>
              <h3 className="text-green-400">{commentary.slice(0,25).map(item => <p className="mx-4">{item}</p>)}</h3>
            </div>
            </div>
          </div>
      )
    }else{
      return(
        <div className="animate-pulse">
          <div className="flex justify-center text-6xl md:text-8xl font-serif mt-48 md:mt-80">{gameOverMsg}</div>
          <p className="flex justify-center text-gray-500 text-2xl">game's over</p>
        </div>
      )
    }
  }

  return (
    <>
        {screen()}
    </>
  );
}

export default App;
