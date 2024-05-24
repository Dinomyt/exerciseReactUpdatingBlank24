import { useState } from "react";

//We need a button when the user clicks a button it will update hte name: 'Zac' to name: 'Patrick'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id:1,
        player: {
            name: "David",
        },
    });

    const handleClick = () => {
      setGame(prevGame => ({
          ...prevGame,
          player: {
              ...prevGame.player,
              name: "Aaron",
          },
      }));
    };

  return (
    <>
        <p>Player Name: {game.player.name}</p>
        <button onClick={handleClick}>Change Name</button>
    </>
  )
}

export default Exercise1
