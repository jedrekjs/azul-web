interface TilePipeProps{
    playerId: number,
    tileCount: number,
    tiles: []
}

function TilePipe({playerId, tileCount, tiles}: TilePipeProps){

    const renderTilePipe = () => {
        return <>TilePipe</>
    }

    return (
        <div>
            {renderTilePipe()}
            <span>\/</span>
        </div>
    )
}

export default TilePipe;