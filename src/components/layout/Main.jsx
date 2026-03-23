import ProductList from "../ProductList"
import Cart from "../Cart"

const Main = () => {
  return (
    <main className="flex lg:flex-row pt-16 justify-center bg-amber-100 dark:bg-gray-200">
      <ProductList/>
      <Cart/>
    </main>
  )
}

export default Main