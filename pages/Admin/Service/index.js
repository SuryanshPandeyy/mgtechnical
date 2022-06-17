import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import AdminCss from "/styles/Admin.module.css";

const Service = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    if (file !== "" && title !== "" && desc !== "") {
      const formdata = {
        file,
        title,
        desc,
      };

      await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if(res.status === 200) {
          setFile("");
          setTitle("");
          setDesc("");
          alert("Submitted");
        }
      });
    }
  };

  const inputStyle = { top: "-1.2rem", fontSize: "1.2rem" };

  return (
    <React.Fragment>
      <div className="contactContainer">
        <Divider className="divider">
          <div className="heading"></div>
          <h1>Services</h1>
        </Divider>
        <form className="contactForm" onSubmit={submitForm}>
          <div className="contactInputContainer">
            <label
              htmlFor="file"
              style={file !== "" ? inputStyle : { top: "" }}
            >
              Icon Name
            </label>
            <input
              name="file"
              id="file"
              type="text"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label
              style={title !== "" ? inputStyle : { top: "" }}
              htmlFor="title"
            >
              Title
            </label>
            <input
              name="title"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="contactInputContainer">
            <label
              style={desc !== "" ? inputStyle : { top: "" }}
              htmlFor="desc"
            >
              Description
            </label>
            <textarea
              name="desc"
              id="desc"
              rows={10}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <Button type="submit" className="send">
            Submit
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Service;
