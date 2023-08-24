import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Singleview() {
  
  const params =useParams()
  console.log(params)
  const [single,setSingle]=useState([]);
  useEffect(()=>{
    setSingle((JSON.parse(localStorage.getItem("Employee"))).filter((item)=>{
      return item.emp_id==params.id
    }))
  },[])
  console.log(single)
  
  return (
    <div>
      
      <div style={{alignItems:"center",marginLeft:"400px",marginTop:"50px"}}>
        <div className="card" style={{width:"18rem",margin:"10px",padding:"10px",background:"#10ccc",alignItems:"center"}} >
            <img src='' placeholder='imagecap' style={{width:"200px",height:"250px"}}></img>
            <h3>ID : {single[0]?.emp_id}</h3>
            <h4> Name : {single[0]?.Name} </h4>
            <h6>Phone : {single[0]?.Phone} </h6>
            <h6> E-mail : {single[0]?.Mail} </h6>
            <p style={{textAlign:"center"}}className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            <Link to="/localview/localview" style={{textAlign:"center"}} className="btn btn-primary">BACK</Link>

        </div>

    </div>
    </div>
  )
}
