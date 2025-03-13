import React,{useState} from 'react'

const UseMemo = () => {
    const [todos,setTodos]=useState([])
    const [count,setCount]=useState(1)
    const calculate=()=>{
        console.log("Calculating....");
        let sum=0;
        for(let i=0;i<=count;i++){
            sum+=count;
        }
        return sum;
    }
  return (
    <div>
        <h1>Total Todos:{todos.length}</h1>
        <button onClick={()=>setTodos([...todos,"new task"])}>Add Task</button>
        <h1>Sum from 1 to {count}:{calculate()}</h1>
        <button onClick={()=>setCount(count+1)}Increment>Increment</button>
    </div>
  )
}

export default UseMemo