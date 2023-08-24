import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import img from "./dark.png";
import img2 from "./asba.jpg";
import img3 from "./razi.jpg";
import img4 from "./fayiz.jpg";
import { width } from "@mui/system";
export default function View({ Pdetails }) {
  const [value, setValue] = useState([]);
  const params = useParams();
  console.log(params.id);
  console.log("-----------------------");
  console.log(Pdetails);
  useEffect(() => {
    setValue(Pdetails.filter((e) => e.id == params.id));
  }, []);
  console.log("-----------------------");
  console.log(value);

  return (
    <div>
    
      {value.map((item) => {
        return (
            <>
            <div
                className=" card bg-primary-subtle"
                style={{marginLeft:"750px",marginTop:"150px", margin: "10px", padding: "10px", width:"500px",height:"900px"}}>
                <div className="card-body">
                {item.image}
                <h2 style={{ textAlign: "center" }} className="card-title">
                    ID :{item.id}
                </h2>
                <h3 style={{ textAlign: "center" }} className="card-title">
                    Name :{item.name}
                </h3>
                <h5 style={{ textAlign: "center" }} className="card-title">
                    Title :{item.title}
                </h5>
                <h5 style={{ textAlign: "center" }} className="card-title">
                    Place :{item.place}
                </h5>
                <p style={{ textAlign: "center" }} className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
                </div>
            </div>
            </>
        );
        })}
    </div>
  );
}
