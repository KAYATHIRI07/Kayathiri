import React from "react"
const Search=React.memo(({onChange})=>{
    console.log("From search component")
    return(
        <div>
            <input type="text" placeholder="Type something" onChange={(e)=>
                onChange(e.target.value)}/>
        </div>
    )
})
export default Search