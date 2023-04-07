import React from "react";
import { useParams } from "react-router-dom";
import userdata from "./userdata";

const Userdetails = () => {
  const { userid } = useParams();

  const userdetailsdata = userdata.find((each) => each.id === Number(userid));

  return (
    <div className="center">
      <h1>Userdetails</h1>

      <h3>{userdetailsdata.name}</h3>
      <h3>{userdetailsdata.username}</h3>
      <h3>{userdetailsdata.phone}</h3>
      <h3>{userdetailsdata.website}</h3>
    </div>
  );
};

export default Userdetails;
