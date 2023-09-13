import { useState } from "react"
import Cart from "./components/Cart"
import Nav from "./components/Nav"

const App = () => {
  const [cart, setCart] = useState(['TV', 'Computer', 'Apple Watch', 'Glasses'])

  const onClear = () => {
    setCart([])
  }

  return (
    <>
      <Nav cartItemsCount={cart.length}/>
      <Cart cartItems={cart} onClear={onClear} />
    </>
  )
}

export default App