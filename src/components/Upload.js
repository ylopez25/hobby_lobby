import React from "react";
import { useState } from "react";
import "./Upload.css";

export default function Update() {
  const [imgfile, uploadimg] = useState([]);
  console.log("Image FIles", imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [...imgfile, URL.createObjectURL(e.target.files[0])]);
    }
  };

  const clearFile = () => {
    uploadimg([]);
  };
  return (
    <div className="upload">
      <div className="upload_title">
        <h3>Share your accomplishment to inspire others</h3>
        <div>
          <select name="" id="">
            <option value="hobby">select hobby</option>
            <option value="hobby">crotchet</option>
            <option value="hobby">swimming</option>
          </select>
        </div>
      </div>
      <div className="upload_section">
        <div className="upload_img">
          <div className="upload_box">
            {imgfile.map((elem) => {
              return (
                <>
                  <span key={elem}>
                    <img src={elem} height="200" width="200" alt="med1" />
                  </span>
                </>
              );
            })}
          </div>
          <input type="file" onChange={imgFilehandler} />
          <hr />
          <div>
            <button onClick={clearFile} className="btn btn-primary">
              clear
            </button>
          </div>
        </div>
        <div className="upload_details">
          <textarea name="name" id="" cols="30" rows="10" placeholder="Title" style={{ height: "43px" }}></textarea>
          <hr />
          <textarea name="name" id="" cols="30" rows="10" placeholder="Describe the project you worked on:" style={{ height: "43px" }}></textarea>
          <hr />
          <textarea name="name" id="" cols="30" rows="10" placeholder="Leave your motivational tip of the day:" style={{ height: "43px" }}></textarea>
          <hr />
          <div>
            <button className="btn btn-primary">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
