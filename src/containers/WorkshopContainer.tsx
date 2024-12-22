import Tile from "@/components/Tile"

interface WorkshopContainerProps{
    id: number,
    tilesArr: string[]
}

function WorkshopContainer({id, tilesArr}: WorkshopContainerProps){
    const renderTiles = () => {
        return tilesArr.map((value, i) => {
            return (<Tile color="value"></Tile>)
        })
    }
    return (
        <>
            <div>Workshop number {id}</div>
            {renderTiles()}
        </>
    )
}
 
export default WorkshopContainer;