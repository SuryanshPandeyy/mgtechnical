import { Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const Service = () => {
  const router = useRouter();
  const { query } = router;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/services", fetcher);

  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (error) return console.log(error);
    if (!data) return console.log("loading");

    const serviceData = data.service;
    const itemData = serviceData.find((item) => item._id === query.id);

    setFile(itemData.file);
    setTitle(itemData.title);
    setDesc(itemData.desc);
    console.log(serviceData.find((item) => item._id === query.id));
  }, [data, error, query]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (file !== "" && title !== "" && desc !== "") {
      const formdata = {
        _id: query.id,
        file,
        title,
        desc,
      };

      await fetch("/api/services", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if (res.status === 200) {
          router.push("/Admin");
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
            Send
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Service;
