import PlayerContainer from "@/containers/PlayerContainer";
import WorkshopContainer from "@/containers/WorkshopContainer";

interface GameBoardProps{
    winner: string | null
}

function GameBoard({winner}: GameBoardProps){
    const players = [1, 2];
    const workshopNumber = 5;
    const tileNumber = 20;
    const colorArr = ['purple', 'green', 'red', 'yellow', 'blue'];
    var tileBag: {[key: string]: number} = {};
    // var tileBag: Array<{key: string, value: number}> = [];
    resetTileBag();
    // {'red': tileNumber, 'yellow': tileNumber, 'green': tileNumber, 'purple': tileNumber}

    function resetTileBag(){
        colorArr.forEach((color) => {
            tileBag[color] = tileNumber;
        })
    }
    console.log(tileBag);

    const renderPlayers = () => {
        return players.map((id, i) =>{
            return (<PlayerContainer playerId={id}></PlayerContainer>)
        })
    };
    const renderWorkShops = () => {
        for(let i = 0; i<workshopNumber; i++){
            return (<WorkshopContainer id={i} tilesArr={[]}></WorkshopContainer>)
        }
    };


    // const resetTileBag = () => {
    //     
    // }
    const startGame = () => {
        console.log('start!');
    }

    return (
        <>
            <div>Main Game Board</div>
            <button onClick={startGame}>Start Game!</button>
            <div>
                {renderPlayers()}
            </div>
            <div>
                {renderWorkShops()}
            </div>
        </>
    )
}

export default GameBoard;