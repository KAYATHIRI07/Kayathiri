import { useState,useCallback } from "react";
import Search from "./Search"
import { shuffle } from 'lodash'
const allUsers=["virat","Carti","Ronaldo","Cat","user5"]
const Parent1=()=>{
    const[users,setUsers]=useState(allUsers)
    const handleSearch=useCallback((text)=>{
        const filtered=users.filter((user)=>user.includes(text))
        setUsers(filtered)
    },{})
    return(
        <div>
            <button onClick={()=>setUsers(shuffle(users))}>Shuffle</button>
            <Search onChange={handleSearch}/>
            <ul>
                {users.map((user)=>(
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}
export default Parent1