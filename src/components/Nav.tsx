interface Props {
    cartItemsCount: number
}

const Nav = ({ cartItemsCount }: Props) => {
  return (
    <>Nav {cartItemsCount}</>
  )
}
export default Nav