import React from 'react'
import img from './dark.png'
import img2 from './asba.jpg'
import img3 from './razi.jpg'
import img4 from './fayiz.jpg'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap';


export default function bootstrap({Pdetails}) {
  //   const Pdetails=[{
  //       id:11,
  //       name:"Shaheed",
  //       title:"Web Developer",
  //       place:"Puttur",
  //       image:<img src={img} className="img-fluid" alt="..."></img>
  //   },{
  //       id:12,
  //       name:"Asba",
  //       title:"React Developer",
  //       place:"Uppinangady",
  //       image:<img src={img2} className="img-fluid" alt="..."></img>
  //   },{
  //       id:13,
  //       name:"Razi",
  //       title:"Software Developer",
  //       place:"Sullia",
  //       image:<img src={img3} className="img-fluid" alt="..."></img>
  //   },
  //   {
  //     id:14,
  //     name:"Fayiz",
  //     title:"Software Developer",
  //     place:"Padil",
  //     image:<img src={img4} className="img-fluid" alt="..."></img>
  // }
  // ];

    function Display({profile}){
      return(
        <>
            <div className="card" style={{margin:"10px",padding:"10px",background:"#10ccc"}} >
              {profile.image}
                <div className="card-body">
                    <h2 style={{textAlign:"center"}} className="card-title">{profile.name}</h2>
                    <h3 style={{textAlign:"center"}} className="card-title">{profile.title}</h3>
                    <h5 style={{textAlign:"center"}} className="card-title">{profile.place}</h5>
                    <p style={{textAlign:"center"}}className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a style={{textAlign:"center"}} href="#" className="btn btn-primary">VISIT PROFILE</a>
                </div>
            </div>
        </>
      )
    }
    // function Table({data}){
    //     return(
    //       <div className='table-responsive' style={{width:"100%"}}>
            
              
                  
              
              
    //       </div>
    //     )
    // }

  return (
  <>
      <Row lg="3" >
      {Pdetails.map((item) =><Display profile={item}/> )}
    </Row>
    
      <div className='table-responsive' style={{width:"100%"}}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Place</th>
            <th colSpan="2">Modify</th>

          </tr>
        </thead>
        <tbody>
        
        {Pdetails.map((item,sl) =>{
          return(
                  <>
                    <tr>
                      <th scope="col">{sl+1}</th>
                      <th scope="col">{item.id}</th>
                      <td scope="col">{item.name}</td>
                      <td scope="col">{item.title}</td>
                      <td scope="col">{item.place}</td>
                      <td>
                        <button className='btn btn-primary' >
                          <Link to={`view/${item.id}`} style={{textDecoration:"none",color:"white"}}>View</Link>
                          </button>
                      </td><td>
                        <button className='btn btn-success' >
                          <Link to={`edit/${item.id}`} style={{textDecoration:"none",color:"white"}}>Edit</Link>
                          </button>
                      </td>
                      <td>
                        <button className='btn btn-danger' >
                          <Link style={{textDecoration:"none",color:"white"}}>Delete</Link>
                        </button>
                      </td>
                    </tr>
                  </>
                  )
                }
        )}
        </tbody>
      </table>
      </div>
    
  </>
  );
}
