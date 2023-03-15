import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'

const CartIcon = () => {
    const {cartDropdown, setCartDropdown} = useContext(CartContext)

    const toggleCartDropdown = () => setCartDropdown(!cartDropdown)

    return (
       <div className='cart-icon-container' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
       </div>
    )
}


export default CartIcon