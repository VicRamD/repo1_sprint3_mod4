import { useEffect, useState } from "react";

export const useCart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return {isOpen, open, close}
}

export const useShoppingCartlist = (listName) => {
    //listName es el nombre con el que está guardado en localStoraf

     //estado de el carrito de productos
    //recuperar lista del local storage (si existe)
    const [cartList, setCartlist] = useState(() => {
        const saved = localStorage.getItem(listName);
        return saved ? JSON.parse(saved) : [];
    });

      //añadir a cardlist
  const addToCartlist = (product) => {
    //Revisa si el producto ya está en la lista para no agregarlo si no sumarle uno
    const productAlreadyInPlaylist = cartList.find( item => item.id === product.id);
    if(!productAlreadyInPlaylist){
      setCartlist([...cartList, { ...product, quantity: 1 }]);
    } else {
      const updatedList = cartList.map((item) =>item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCartlist(updatedList);
    }
  };

   const updateQuantity = (id, amount) => {
    /*Math.max(1, item.quantity + amount): Compara el número 1 con el resultado de la cuenta 
    y se queda con el más alto para evitar que baje a 0.
    La eliminación será con el botón con icono de basurero*/
    setCartlist(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
  };

  const removeFromShoppingCartlist = (id) => setCartlist(prev => prev.filter(item => item.id !== id));

  //Guardar en Local Storage cuando cambie
  useEffect(() => {
    localStorage.setItem(listName, JSON.stringify(cartList));
  }, [cartList, listName])

  return {cartList, setCartlist, addToCartlist, updateQuantity, removeFromShoppingCartlist}
}