const Message = () => {

  const name = ''

  if (name){
    return (
      <>
        <h3>{name}</h3>
      </>
    )
  }
  return (
    <>
      <h3>Hello, Thieves</h3>
    </>
  )
}
export default Message