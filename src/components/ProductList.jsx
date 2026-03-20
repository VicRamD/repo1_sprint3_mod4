import { furnitureList } from '../constants/furnitureList'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className="bg-amber-100 py-10 flex justify-center lg:w-3/4">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6">
          
            {/* Card Component */}
            {furnitureList.map(furniture => <ProductCard key={furniture.id} product={furniture}/>)}
        </div>
    </div>
  )
}

export default ProductList