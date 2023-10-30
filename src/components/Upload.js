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

  return (
    <div className="upload">
      <div className="upload_title">
        <h1>Share your accomplishment to inspire others</h1>
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
            <input type="file" onChange={imgFilehandler} />
          </div>
          <hr />
          <div className="upload_buttons">
            <button>upload</button>
            <button>clear</button>
          </div>
        </div>
        <div className="upload_details">
          <label htmlFor="title">Title:</label>
          <input type="title" />
          <hr />
          <label htmlFor="title">Description:</label>
          <input type="text" />
          <button>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
