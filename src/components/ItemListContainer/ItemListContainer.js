import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.css"

const ItemListContainer = ({greeting = 'Hello'})=> {
    
    
       
    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }

    

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
            
        </div>
    )    
    
}

export default ItemListContainer