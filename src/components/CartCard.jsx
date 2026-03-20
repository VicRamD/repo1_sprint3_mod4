const CartCard = ({product}) => {
  return (
    <div className="bg-white p-4 flex gap-4 rounded-lg w-120 border-b-2 border-amber-400">
        <img src={product.img} alt={product.alt}
            className="size-32 rounded-md object-cover"/>
        <div className="w-full">
            <div className="grow">
                {/**Nombre y precio */}
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                </div>
                {/**Descripción */}
                <p className="text-xl">&#36;{product.price}</p>
                {/**Cantidad y quitar */}
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <i className="bi bi-plus-circle-fill cursor-pointer hover:text-green-600"></i>
                        <p>{product.quantity}</p>
                        <i className="bi bi-dash-circle-fill cursor-pointer hover:text-red-600"></i>
                    </div>
                    <i className="bi bi-trash cursor-pointer hover:text-red-600"></i>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default CartCard