import React from 'react'
import { useState } from 'react';
export default function Localinsert() {
  let initialValue;
  if (localStorage.getItem("Name")===null){
  initialValue = []
  }else{
  initialValue = JSON.parse(localStorage.getItem("Name"))
}
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [mail,setMail]=useState("");
  const [value,setValue]=useState(initialValue);
  

  console.log(name);
  console.log(phone);
  console.log(mail);

  const Insert=()=>{
    let emp_id=101;
    if(value.length===0){
      emp_id=101;
    }else{
      emp_id=value[value.length-1].emp_id+1
    }
    const details={
      emp_id:emp_id,
      Name:name,
      Phone:phone,
      Mail:mail
    }
    
    setValue([...value, details]);
    // localStorage.setItem("Name",name);
    // localStorage.setItem("Phone",phone);
    // localStorage.setItem("Mail",mail);

    alert("Details are inserted successfullyy....");
  }
useEffect(()=>{
  localStorage.setItem("Name",JSON.stringify(value));
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
          <label htmlFor="floatingInputGroup2">Name</label>
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
          <label htmlFor="floatingInputGroup2">Phone number</label>
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
          <label htmlFor="floatingInputGroup2">E-mail</label>
        </div>
        <div className="valid-feedback">Enter e-mail ID</div>
      </div>
      
      <div  style={{margin:"20px",padding:"10px",marginLeft:"750px"}}>
      <button type="button" className="btn btn-outline-success" style={{width:"100px"}} onClick={Insert}>Insert</button>
      </div>
      </div>
    </div>
  </form>    
    </div>
  )
}
