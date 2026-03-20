import { useCounter } from "../hooks/useCounter"

const CartCard = () => {
    const {count, increase, decrease} = useCounter(1);

  return (
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
                            <i className="bi bi-plus-circle-fill cursor-pointer hover:text-green-600" onClick={increase}></i>
                            <p>{count}</p>
                            <i className="bi bi-dash-circle-fill cursor-pointer hover:text-red-600" onClick={decrease}></i>
                        </div>
                        <i className="bi bi-trash cursor-pointer hover:text-red-600"></i>
                    </div>
                </div>
                    
            </div>
    </div>
  )
}

export default CartCard