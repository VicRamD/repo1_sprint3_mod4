import { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

//Crear el contexto
const CartContext = createContext();

//Crear el proveedor del contexto
export const CartProvider = ({ children }) => {

    const {isOpen, open, close} = useCart();
    return(
        <CartContext.Provider value={{isOpen, open, close}}>
            { children }
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
}
