import { useState } from "react"

const Message = () => {
  const [games, setGames] = useState(['FFX', 'Apex Legends', 'Secret of Mana', 'Legend of Dragoon'])
  const handleClick = () => {
    setGames([...games, 'Gears of War'])
    console.log(games)
  }
  return (
    <>
      {games.map((game) => game === 'Apex Legends' ? 'RE4' : game)}
      <button onClick={handleClick}>Click</button>
    </>
  )
}
export default Message