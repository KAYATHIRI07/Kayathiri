import { useEffect, useRef } from 'react'

const UseRef1 = () => {
    const inputFocus=useRef(null)
    useEffect(()=>{
        inputFocus.current?.focus();
    },[])
  return (
    <div>
        <input type="text" ref={inputFocus}/>
    </div>
  )
}

export default UseRef1