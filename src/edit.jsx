import React from "react";
import { Link } from "react-router-dom";
import Bootstrap from "./boootsrap";

export default function edit() {
  return (



    
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
          <label for="floatingInputGroup2">User-ID</label>
        </div>
        <div className="valid-feedback">Update user-id</div>
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
          <label for="floatingInputGroup2">Username</label>
        </div>
        <div className="valid-feedback">Update username.</div>
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
          <label for="floatingInputGroup2">Title</label>
        </div>
        <div className="valid-feedback">Update the title</div>
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
          <label for="floatingInputGroup2">Place</label>
        </div>
        <div className="valid-feedback">Update the place</div>
      </div>
      
      <div  style={{margin:"20px",padding:"10px",marginLeft:"550px"}}>
      <button type="button" class="btn btn-outline-success">Update</button>
      </div>

      </div>
    </div>
  );
}
