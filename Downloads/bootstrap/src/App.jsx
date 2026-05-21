import { Card } from "react-bootstrap";
import Mymenu from "./conponent/manu";
import Mynav from "./conponent/nav";
import Cart from "./conponent/cart";

let App=()=>{
  return(
  <>
  <Mynav/>
  <Mymenu />
  <Cart />
  </>
  )
}
export default App;