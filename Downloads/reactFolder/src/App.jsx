// import axios from "axios";
// import { useState, useEffect } from "react";
// let App=()=>{
//   const[myData,setData]=useState([]);
//   let myApi =async()=>{
//   let Api = "https://jsonplaceholder.typicode.com/posts"
//   let res = await axios.get(Api)
//   setData(res.data)

import Box1 from "./component/box1";

  
//   }
//   const hero = myData.map((e)=>{
//     return(
//       <>
//       <tr>
//         <td>{e.userId}</td>
//         <td>{e.id}</td>
//         <td>{e.title}</td>
//         <td>{e.body}</td>
//       </tr>
//       </>
//     )
//   })
//   useEffect(()=>{
//    myApi()
//   },[])
//   return(
//     <>
//      <table border={1}>
//         <tr>
//           <th>userId</th>
//            <th>Id</th>
//             <th>title</th>
//              <th>body</th>
//         </tr>
//          {hero}
//      </table>
//     </>
//   )
// }
// export default App;
// const App=()=>{
//   return(
//     <>
//     <Box1 name="raj" age = {20} />
//     </>
//   )
// }
// export default App;