interface TileProps{
    color: string
}

function Tile({color}: TileProps){

    return (
        <>
            <div className={color}>Tile</div>
        </>
    )
}

export default Tile;