import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Localedit() {
  const [details,setDetails]=useState([])
  const params = useParams()
  console.log(params)
  console.log(params.id)
  useEffect(()=>{
    setDetails((JSON.parse(localStorage.getItem("Name"))).filter((item)=>{
      return item.emp_id == params.id
    }))
  },[])
  console.log(details)
  return (
    <div>
      <div style={{backgroundColor:"#cccc"}}>
      <div className="container-md" style={{margin:"20px",padding:"20px"}}>
        <center><h3 style={{fontFamily:"monospace",textTransform:"uppercase"}}>Update Form</h3></center>
      <div className="input-group has-validation">
        <span className="input-group-text">@</span>
        <div className="form-floating is-valid">
          <input
            type="text"
            className="form-control is-valid"
            id="floatingInputGroup2"
            placeholder="Username"
            required
          />
          <label htmlhtmlFor="floatingInputGroup2">{details[0]?.emp_id}</label>
        </div>
        <div className="valid-feedback">Update user</div>
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
          />
          <label htmlFor="floatingInputGroup2">{details[0]?.Name}</label>
        </div>
        <div className="valid-feedback">Update name.</div>
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
          />
          <label htmlFor="floatingInputGroup2">{details[0]?.Phone}</label>
        </div>
        <div className="valid-feedback">Update phone number</div>
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
          />
          <label htmlFor="floatingInputGroup2">{details[0]?.Mail}</label>
        </div>
        <div className="valid-feedback">Update E-mail ID</div>
      </div>
      
      <div  style={{margin:"20px",padding:"10px",marginLeft:"550px"}}>
      <button type="button" class="btn btn-outline-success">Update</button>
      </div>

      </div>
    </div>
    </div>
  )
}
