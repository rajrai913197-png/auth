import{Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Signup from "./signup"
import Login from "./login"
const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element = {<Signup />} />
      <Route path="/sign" element = {<Signup />} />
      <Route path="/login" element = {<Login />} />

      </Route>
     </Routes>

    </>
  )
}

export default App
