import { useEffect,useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Component Mounted")
    },[count])
    return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffect