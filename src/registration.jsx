import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bootstrap from "./boootsrap";
export default function Registration() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [adrs, setAdrs] = useState("");

  const Register = () => {
    console.log("Name : " + name);
    console.log("Phone Number : " + number);
    console.log("Email : " + mail);
    console.log("Address : " + adrs);
    setName("");
    setNumber("");
    setMail("");
    setAdrs("");
  };
  const Clear = () => {
    setName("");
    setNumber("");
    setMail("");
    setAdrs("");
  };
  // const studentDetails=[{
  //     name:"shaheed",
  //     roll_no:60,
  //     school:"Philoz"
  // },{
  //     name:"asba",
  //     roll_no:55,
  //     school:"Philoz"
  // },{
  //     name:"Razi",
  //     roll_no:57,
  //     school:"Philoz"
  // },{
  //     name:"safwan",
  //     roll_no:59,
  //     school:"Philoz"
  // }];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li>
                    <Link to="boootsrap" className="navbar-brand" style={{textDecoration:"none",color:"black"}}>Bootstrap</Link>
                </li>
                <li>
                    <Link to="autocomplete" className="navbar-brand" style={{textDecoration:"none",color:"black"}}>MUI</Link>
                  </li>
                  <li>
                  <Link to="/localview/localview" className="navbar-brand" style={{textDecoration:"none",color:"black"}}>Local View</Link>
                  
                  </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="register-form">
        <table className="table table-secondary">
          <div className="form-heading">REGISTRATION FORM</div>
          <tr>
            <th style={{ width: "10%", textAlign: "left" }}>Name :</th>
            <td style={{}}>
              <input
                style={{ height: "30px", width: "50%" }}
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </td>
          </tr>

          <tr>
            <th style={{ width: "20%", textAlign: "left" }}>Phone number :</th>
            <td>
              <input
                style={{ height: "30px", width: "50%" }}
                type="number"
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </td>
          </tr>

          <tr>
            <th style={{ width: "20%", textAlign: "left" }}>Email :</th>
            <td>
              <input
                style={{ height: "30px", width: "50%" }}
                type="mail"
                onChange={(e) => setMail(e.target.value)}
              ></input>
            </td>
          </tr>

          <tr>
            <th style={{ width: "20%", textAlign: "left" }}>Address :</th>
            <td>
              <input
                style={{ height: "30px", width: "50%" }}
                type="text"
                onChange={(e) => setAdrs(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <th style={{ width: "15%", textAlign: "left" }}>
              Alternative Address :
            </th>
            <td>
              <input
                style={{ height: "30px", width: "50%" }}
                type="text"
                onChange={(e) => console.log(e.target.value)}
              ></input>
            </td>
          </tr>
        </table>
        <hr/>
        <div class="d-grid gap-1 col-2 mx-auto">
          {/* <button onClick={Register} className="btn btn-outline-success">
            Register
          </button>
          <button onClick={Clear} className="btn btn-outline-danger">
            Clear
          </button> */}

                    <button className="btn btn-outline-success">
            <Link style={{textDecoration:"none",color:"black"}} to="autocomplete">MUI</Link>
          </button>
          <br/>
          <button className="btn btn-outline-success">
            <Link style={{textDecoration:"none",color:"black"}} to="/localview/localview">Lochal Viewssssssssssssssssssssssssssssssssssssssssssssss</Link>
          </button>
                <br/>
                <button className="btn btn-outline-success">
            <Link style={{textDecoration:"none",color:"black"}} to="boootsrap">Bootsrap</Link>
          </button>

          <button className="btn btn-outline-success">
            <Link style={{textDecoration:"none",color:"black"}} to="countryselect">countryselect</Link>
          </button>


        </div>
        <hr/>
        <table className="table table-danger">
          <tr>
    
          </tr>
          <tr>
            <td>
              <h3>{mail}</h3>
            </td>
          </tr>
        </table>
      </div>

      <table className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody className="table-success">
          <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{number}</td>
            <td>{mail}</td>
            <td>{adrs}</td>
          </tr>
        </tbody>
        <tbody className="table-success">
          <tr>
            <th scope="row">2</th>
            <td>{name}</td>
            <td>{number}</td>
            <td>{mail}</td>
            <td>{adrs}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <br />

      {/* </div> */}
    </>
  );
}
