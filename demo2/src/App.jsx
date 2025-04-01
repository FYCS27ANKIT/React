import Conditionalrender from "./components/Conditionalrender"
import Prop from "./components/Prop"
import UseState from "./components/UseState"
import Wprop from "./components/Wprop"

function App() {

  return (
    <>
      {/* <Prop name ="Kartik" country="Kerla"/>
      <Wprop name="Kuch bhi" age="13"/>
      <UseState/> */}
      <Conditionalrender isLogin = {true}/>
    </>
  )
}

export default App
