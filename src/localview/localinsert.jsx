import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
export default function Localinsert() {
  let initvalue;
  if(localStorage.getItem("Employee")===null)
  {
    initvalue=[]
  }
  else{
    initvalue=JSON.parse(localStorage.getItem("Employee"))
  }
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [mail,setMail]=useState("");
  const [value,setValue]=useState(initvalue);

  console.log(name);
  console.log(phone);
  console.log(mail);

  const Insert=()=>{
    let emp_id =101;
    if(value.length===0){
      emp_id =101;
    }
    else{
      emp_id =value[value.length-1].emp_id +1
    }
const details={
  emp_id:emp_id,
  Name: name,
  Phone:phone,
  Mail:mail
}
setValue([...value,details])
    // console.log("Name: " + name);
    // console.log("Phone: " + phone);
    // console.log("Mail: " + mail);
    // localStorage.setItem("Name : ",name);
    // localStorage.setItem("Phone : ",phone);
    // localStorage.setItem("Mail : ",mail);

  }


  

  useEffect(()=>{
    localStorage.setItem("Employee",JSON.stringify(value))
  },[value])

  return (
    <div>
        <form action=''>
        <div style={{backgroundColor:"#cccc"}}>
      <div className="container-md" style={{margin:"20px",padding:"20px"}}>
        <center><h3 style={{fontFamily:"monospace",textTransform:"uppercase"}}>Inserting Form</h3></center>
      
      
      <div className="input-group has-validation">
        <span className="input-group-text">@</span>
        <div className="form-floating is-valid">
          <input
            type="text"
            className="form-control is-valid"
            id="floatingInputGroup2"
            placeholder="Username"
            required
            onChange={(e)=>setName(e.target.value)}
          />
          <label for="floatingInputGroup2">Name</label>
        </div>
        <div className="valid-feedback">Enter the name.</div>
      </div>
      
      <div className="input-group has-validation">
        <span className="input-group-text">@</span>
        <div className="form-floating is-valid">
          <input
            type="text"
            className="form-control is-valid"
            id="floatingInputGroup2"
            placeholder="Username"
            required
            onChange={(e)=>setPhone(e.target.value)}

          />
          <label for="floatingInputGroup2">Phone number</label>
        </div>
        <div className="valid-feedback">Enter the phone number</div>
      </div>
      
      <div className="input-group has-validation">
        <span className="input-group-text">@</span>
        <div className="form-floating is-valid">
          <input
            type="text"
            className="form-control is-valid"
            id="floatingInputGroup2"
            placeholder="Username"
            required
            onChange={(e)=>setMail(e.target.value)}

          />
          <label for="floatingInputGroup2">E-mail</label>
        </div>
        <div className="valid-feedback">Enter e-mail ID</div>
      </div>
      
      <div  style={{margin:"20px",padding:"10px",marginLeft:"750px"}}>
      <button type="button" class="btn btn-outline-success" style={{width:"100px"}} onClick={Insert}>Insert</button>
      </div>

      </div>
    </div>
        </form>
    </div>
  )
}
