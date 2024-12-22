interface BoardProps{
    playerId: number
}

function Board({playerId}: BoardProps){

    return (
        <>
            <div>Player {playerId} Board</div>
        </>
    )
}

export default Board;