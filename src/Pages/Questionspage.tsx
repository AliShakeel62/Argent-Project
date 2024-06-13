import { useState } from "react"
import { sendData } from "../Config/Firebasemethod"
export default function Questionspage (){
    const [inpques,setinpques] = useState()
    const [inpans,setinpans] = useState()
   const quesbtn =()=>{
    console.log(inpques)
   }
   
   const ansbtn =()=>{
    console.log(inpans)
   }
   const setdata = ()=>{
    let obj = { 
        questions : inpques,
        CreatAt: JSON.stringify(new Date())
    }
    sendData("question",obj)
   }
   return<>
    <h1 className="text-center text-primary ">Questions</h1>
   <div className="ms-5">
   <input type="text" placeholder="Type Question here" className="rounded-3 " onChange={(e:any)=>(
   setinpques(e.target.value)
   )} />
    <br />
    <br />
    <button className="btn btn-primary" onClick={()=>{
        setdata()
    }}>Submitte here</button>
    <br />
    <br />
    <input type="text" placeholder="Your Answer" className="rounded-3" onChange={(a:any)=>(setinpans(a.target.value))}/>
    <br />
    <br />
    <button className="btn btn-primary" onClick={ansbtn}>Submitte here</button>
   </div>
   
    </>
}