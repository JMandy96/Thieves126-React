import ListGroup from "./components/ListGroup"
import Message from "./components/Message"

const App = () => {
  const students = ["sam", "jake", "justin", "omar", "oackland", "mitchell"];
  return (
    <>
      <h1>Thieves 126: Intro to React</h1>
      <Message/>
      <ListGroup students={students} heading="Thieves Students" age={12}/>
    </>
  )
}

export default App