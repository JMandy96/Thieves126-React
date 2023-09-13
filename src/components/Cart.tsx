interface Props {
    cartItems: string[]
    onClear: () => void
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
        {cartItems.map((item, idx) => <li key={idx}>{item}</li>)}
        <button onClick={onClear}>Clear</button>
    </>
  )
}
export default Cart