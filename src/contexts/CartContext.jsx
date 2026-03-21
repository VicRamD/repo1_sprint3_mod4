import { createContext, useContext } from "react";
import { useCart, useShoppingCartlist } from "../hooks/useCart";

//Crear el contexto
const CartContext = createContext();

//Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const {isOpen, open, close} = useCart();
    const { cartList, addToCartlist, updateQuantity, removeFromShoppingCartlist } = useShoppingCartlist("furntireCart");

    return(
        <CartContext.Provider value={{isOpen, open, close, cartList, addToCartlist, updateQuantity, removeFromShoppingCartlist}}>
            { children }
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
}
