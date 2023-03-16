import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import CheckoutItem from '../../components/checkout card/checkout-card.component'

const CheckOut = () => {
    const {cartItems, total} = useContext(CartContext)

    return(<div>
        <h1>I am the Checkout Page</h1>
            <div >
                {cartItems.map((item) => (
                    <CheckoutItem key={item.id} checkoutItem={item}/>
                ))}
            </div>
            <h1>Total = ${total}</h1>
        </div>)
}


export default CheckOut;