import { createRef } from "react"
import { useRef } from "react"
import { useState } from "react"
import { useReducer } from "react"

const Reducer =()=>{
  const [add,setAdd]=useState(false)
  const inpput = useRef(null)
  const initial_data = [
    "jitendra",
    "sunny"
  ]
  const reducer=(state,action)=>{
    switch(action.type){
      case "REMOVE":
        return state.filter((item)=>{
          return item !== action.payload
        })
        case "ADD":
          return [
            ...state,
            action.payload
          ]
          
        
    }
        
  }

const removename = (e)=>{
  
  setData({
    type:"REMOVE",
    payload:e.target.value
    
  })
}

const addnames =()=>{
  if(!inpput.current.value){
    alert("field can not be empty")
  }else{
  setData({
    type:"ADD",
    payload:inpput.current.value
  })}
}
const[data,setData]=useReducer(reducer,initial_data)

return<>
{
  data && data.map((e,index)=>{
    return<>
    {index+1}
    <p>{e}</p>
    <button onClick={removename}  value={e}>delete</button>
     </>
  })

}
<br/>
<br/>
<br/>
  <button onClick={()=>setAdd(!add)}> add</button>
  {
    add ? <>
    <input ref={inpput} type="text"></input>
    <button onClick={addnames} >Submit</button>
    </>:null
  }
</>
}
export default Reducer