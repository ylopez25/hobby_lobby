import React from "react";
import { useState } from "react";
import "./update.css";

export default function Update() {
  const [imgfile, uploadimg] = useState([]);
  console.log("Image FIles", imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [...imgfile, URL.createObjectURL(e.target.files[0])]);
    }
  };

  return (
    <div class="profile_info">
      <div class="profile_username">
        <h1>Username</h1>
        <p>Status:Live</p>
      </div>
      <div class="profile_imgupload">
        <div>
          <h2>Upload</h2>
          <input type="file" onChange={imgFilehandler} />
          <hr />
          <button>upload</button>
          <button>clear</button>
        </div>
        <div></div>
        <div>
          <h3>Preview</h3>
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
      </div>
    </div>
  );
}
