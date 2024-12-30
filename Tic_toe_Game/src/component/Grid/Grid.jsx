import { useState } from "react"
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../../Helper/checkWinner";

function Grid({ numberOfCards }) {
    const [Board, setBoard] = useState(Array(numberOfCards).fill(""));

    const [turn, setTurn] = useState(true);

    const [winner, setWinner] = useState(null);
    function play(index) {
        if (turn == true) {
            Board[index] = "O";
        }
        else {
            Board[index] = "X";
        }
        const win = isWinner(Board, turn ? "O" : "X");
        if (win) {
            setWinner(win);
        }
        setBoard([...Board]);
        setTurn(!turn)
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }

    return (
        <div className="grid-wraper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight winner">Winner is : {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">
                Current Turn :<span>{(turn) ? 'O' : 'X'}</span>
            </h1>

            <div className="grid">
                {Board.map((e, idx) => <Card className="gird-item" key={idx} onPlay={play} player={e} index={idx} gameEnd={winner ? true : false} />)}
            </div>
        </div>
    )
}

export default Grid