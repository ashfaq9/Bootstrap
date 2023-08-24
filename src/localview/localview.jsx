import { SettingsOverscanOutlined } from '@mui/icons-material';
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Localinsert from './localinsert';
export default function Localview() {
  const [display,setDisplay]=useState([]);
  const [delete_item,setDelete_item]=useState([]);

  const onDelete=(item)=>{
   const newDisplay=display.filter((e)=>{
      console.log(e)
      return e !==item
    });
    setDisplay(newDisplay)
    localStorage.setItem("Employee",JSON.stringify(newDisplay))

  }
  useEffect(()=>{
    setDisplay(JSON.parse(localStorage.getItem("Employee")));
  },[])
  console.log(display)
  console.log(delete_item)

  return (
    <div>
       <table className="table">
        <h1>fgggggggggggggggg</h1>
        <thead className="table-success">
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Namesssssssssssssssssssssssssssss</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Modify</th>
          </tr>
        </thead>
        <tbody className="table-secondary">
        {display.map((item,sl) =>{
          return(
                  <>
                    <tr>
                      <th scope="col">{sl+1}</th>
                      <th scope="col">{item.emp_id}</th>
                      <td scope="col">{item.Name}</td>
                      <td scope="col">{item.Phone}</td>
                      <td scope="col">{item.Mail}</td>
                      <td>
                        <button className='btn btn-primary' >
                          <Link to={`/view/${item.emp_id}`} style={{textDecoration:"none",color:"white"}}>View</Link>
                          </button>
                      </td><td>
                        <button className='btn btn-success' >
                          <Link to={`edit/${item.emp_id}`} style={{textDecoration:"none",color:"white"}}>Edit</Link>
                          </button>
                      </td>
                      <td>
                        <button className='btn btn-danger' >
                          <Link style={{textDecoration:"none",color:"white"}} data-toggle="modal" data-target="#exampleModal" onClick={()=>setDelete_item(item)}>Delete</Link>
                        </button>
                      </td>
                    </tr>
                  </>
                  )
                }
        )}
        </tbody>
      </table>

      
     

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
        <button onClick={()=>onDelete(delete_item)} data-dismiss="modal" type="button" className="btn btn-primary">Yes</button>
        
      </div>
    </div>
  </div>
</div>
</div>
  )
}
