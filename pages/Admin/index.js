import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import AdminCss from "/styles/Admin.module.css";

const Admin = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/services", fetcher);

  if (error) return console.log(error);
  if (!data) return console.log("loading");

  const serviceData = data.service;
  console.log(serviceData);
  return (
    <React.Fragment>
      <div className={AdminCss.container} style={{ background: "#fff" }}>
        <div className={AdminCss.table}>
          <ul className={AdminCss.tableBox}>
            <li>Photo</li>
            <li>Title</li>
            <li>Description</li>
            <li>Change</li>
          </ul>
          {serviceData.map((item, i) => (
            <ul key={i} className={AdminCss.tableBox}>
              <li>
                <div className={AdminCss.photo}></div>
              </li>
              <li>{item.title}</li>
              <li>{item.desc.substr(0, 50)}...</li>
              <li>
                <Link href={`/Admin/Service/${item._id}`} passhref>
                  <Button className={AdminCss.edit}>Edit</Button>
                </Link>
                <Button>Delete</Button>
              </li>
            </ul>
          ))}
        </div>

        <div className={AdminCss.add}>
          <Link href="/Admin/Service" passHref>
            <Button>Add</Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
