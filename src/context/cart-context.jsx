import { createContext, useState, useEffect} from "react";


const addCartItem = (cartItems, productToAdd) => {
    const exsitingCartItem = cartItems.find(
        (cartItem) => cartItem.id == productToAdd.id
    )
    if(exsitingCartItem){
        return cartItems.map((cartItem) => cartItem.id == productToAdd.id ?
         {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}


export const CartContext = createContext({
    cartDropdown: false,
    setCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})


export const CartContextProvider = ({children}) => {
    const [ cartDropdown, setCartDropdown] = useState(false)
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState([])

    useEffect(() => {
        const theCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(theCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))

    }

    const value = {cartDropdown, setCartDropdown, cartItems, addItemToCart ,cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



