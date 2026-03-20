import logo from "../../assets/logo-muebles-deco.png"

const Header = () => {
  return (
    <header>
        <nav className='fixed flex items-center justify-between w-full h-[5em] bg-linear-to-r from-amber-300 to-amber-400 mx-auto z-30 py-5 px-6 lg:px-20 2xl:px-0'>
          <a href="/">
              <img src={logo} alt="logo libroteca" style={{width: '100px', height: '50px'}}/>
          </a>
          <div>
              <button className='border-4 py-2 px-3 border-white text-white bg-amber-500 cursor-pointer rounded-3xl
              hover:text-amber-500 hover:bg-white'><i className="bi bi-cart4"></i> Carrito</button>
          </div>
      </nav>
    </header>
  )
}

export default Header