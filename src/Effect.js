// import React, { useEffect, useState } from 'react'

// export default function Effect() {
//     const [count,setCount]=useState(0)
//     const [data,setData]=useState(10)
//     useEffect(()=>{
//         // alert("Harsh")
//         console.log("use effect")
//     },[data])
//     useEffect(()=>{
//         // alert("Harsh")
//         console.log("use effect")
//     },[count])
//   return (
//     <div>
//       <h1>Useeffect event</h1>
//       <h2>{count}</h2>
//       <button onClick={()=>setCount(count+1)}>Update counter</button>
//       <h2>{data}</h2>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import User from './User'
export default function Effect() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(10)
    
  return (
    <div>
      <h1>Useeffect event</h1>
      <User count={count} data = {data}/>
      <button onClick={()=>setCount(count+1)}>Update counter</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  )
}


