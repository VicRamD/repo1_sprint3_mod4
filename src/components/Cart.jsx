import CartCard from "./CartCard";
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
    const { isOpen, close, cartList } = useCartContext();

    return (
        <div className={`relative lg:w-1/4 ${isOpen ? '' : 'hidden'}`}>

            <div className={`fixed top-0 right-0 h-screen w-full lg:static lg:h-full transform
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-45
            flex flex-col bg-linear-to-r from-pink-100 to-orange-300`}>
                
                <div className="w-full bg-white flex justify-between shrink-0">
                    <h2 className="p-4 text-2xl">Mi carrito</h2>
                    <button className="p-4 text-2xl cursor-pointer" onClick={close}>x</button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {cartList.map((item) => <CartCard key={item.id} product={item}/>)}
                </div>
                
                
            </div>
        </div>
    )
}

export default Cart