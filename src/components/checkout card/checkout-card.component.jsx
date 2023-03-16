import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'



const CheckoutItem = ({checkoutItem}) => {
    const {id ,name, price, imageUrl, quantity} = checkoutItem
    const {changeQuantity, removeItem} = useContext(CartContext)
    const addQuantity = () => {
        console.log("add 1")
        changeQuantity(id , "Add")
    }

    const subQuantity = () => {
        console.log("subtract 1")
        changeQuantity(id, "Subtract")
    }

    const removeItemHandler = () => {
        console.log("Item to be Removed")
        removeItem(id)
    }

return (
    <div >
        {/* <img src={imageUrl} alt={`${name}`}/> */} <h1>{name}</h1> 
        <div >
        <h3> Quantity = {quantity}</h3>
        <button onClick={addQuantity}>+</button> 
        <button onClick={subQuantity}>-</button>
        <button onClick={removeItemHandler}>x</button>
        <h3>Price = ${quantity * price}</h3>
        </div>
    </div>
)
}

export default CheckoutItem