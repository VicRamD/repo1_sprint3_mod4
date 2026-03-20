import { useState } from "react";

const Cart = () => {
  //El estado para saber si menu hamburguesa para moviles está abierto o no
    const [isOpen, setIsOpen] = useState(true);
    //Estados para controlar animaciones del burger-menu-button 
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [isMenuClicked , setIsMenuClicked] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
        } else {
            setBurgerClass('burger-bar unclicked');
        }
        setIsMenuClicked(!isMenuClicked);
    }

    const doBothChangesFunction = () => {
        //Despliega o repliega el menú para moviles
        toggleMenu();
        //Activa animación relacionada al burger-menu-button 
        updateMenu();
    }

    return (
        <div className="relative lg:w-1/4">
            {/*<div className='h-full w-16 relative z-50 flex flex-col items-start justify-between' 
            onClick={doBothChangesFunction}>
                <div className={`w-16 h-2 bg-cyan-400 rounded-full my-[0.3em] mb-1 mx-0 box-border ${burgerClass}`}></div>
                <div className={`w-16 h-2 bg-cyan-400 rounded-full my-[0.3em] mb-1 mx-0 box-border ${burgerClass}`}></div>
                <div className={`w-16 h-2 bg-cyan-400 rounded-full my-[0.3em] mb-1 mx-0 box-border ${burgerClass}`}></div>
            </div> */}

            <div className={`fixed top-0 right-0 h-screen w-full lg:static lg:h-full transform
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-45
            flex justify-center items-center bg-pink-100`}>
                
                <div className="bg-white p-4 flex gap-4 rounded-lg w-120">
                   <img src="/src/assets/furniture/biblioteca-puertas-bajas-oficina.webp" alt="Imagen de biblioteca con puertas bajas" 
                   className="size-32 rounded-md object-cover"/>
                    <div>
                        <div className="grow">
                            {/**Nombre y precio */}
                            <div className="flex justify-between">
                                <h3 className="text-xl font-semibold">Biblioteca con puertas bajas</h3>
                            </div>
                            {/**Descripción */}
                            <p className="text-xl">&#36;708500</p>
                            {/**Cantidad y quitar */}
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <i className="bi bi-plus-circle-fill cursor-pointer hover:text-green-600"></i>
                                    <p>1</p>
                                    <i className="bi bi-dash-circle-fill cursor-pointer hover:text-red-600"></i>
                                </div>
                                <i className="bi bi-trash cursor-pointer hover:text-red-600"></i>
                            </div>
                        </div>
                    
                   </div>
                </div>
                <ul className="text-white flex flex-col items-center justify-center space-y-6 mt-6">
                    
                </ul>
                <div className="flex flex-col items-center justify-center mt-6">
                    
                </div>
                
            </div>
        </div>
    )
}

export default Cart