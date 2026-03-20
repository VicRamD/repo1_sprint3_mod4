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

  //Guardar en Local Storage cuando cambie
  useEffect(() => {
    localStorage.setItem(listName, JSON.stringify(cartList));
  }, [cartList, listName])

  return {cartList, setCartlist, addToCartlist}
}