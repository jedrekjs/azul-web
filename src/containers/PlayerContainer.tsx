import Board from "@/components/Board";
import TilePipe from "@/components/TilePipe";

interface PlayerContainerProps{
    playerId: number
}

function PlayerContainer({playerId}: PlayerContainerProps){
    const renderTilePipes = () => {
        for(let i = 1; i<=5; i++){
            return <TilePipe playerId={playerId} tileCount={i} tiles={[]}></TilePipe>
        }
    }

    return (
        <div>
            <div>
                {renderTilePipes()}
            </div>
            <Board playerId={playerId}></Board>
        </div>
    )
}

export default PlayerContainer;