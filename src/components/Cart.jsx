import CartCard from "./CartCard";
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
  //El estado para saber si menu hamburguesa para moviles está abierto o no
    //const [isOpen, setIsOpen] = useState(true);
    const { isOpen, close, cartList } = useCartContext();

    return (
        <div className={`relative lg:w-1/4 ${isOpen ? '' : 'hidden'}`}>

            <div className={`fixed top-0 right-0 h-screen w-full lg:static lg:h-full transform
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-45
            flex justify-center items-start flex-wrap bg-linear-to-r from-pink-100 to-orange-300`}>
                
                <div className="w-full bg-white flex justify-between">
                    <h2 className="p-4 text-2xl">Mi carrito</h2>
                    <button className="p-4 text-2xl cursor-pointer" onClick={close}>x</button>
                </div>

                <div className="overflow-auto">
                    {cartList.map((item) => <CartCard key={item.id} product={item}/>)}
                </div>
                
                
            </div>
        </div>
    )
}

export default Cart