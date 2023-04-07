import React from "react";
import { NavLink } from "react-router-dom";
import userdata from "./userdata";

const Users = () => {
  return (
    <div className="allusercard center">
      <h1>Users</h1>
      <div className="userson">
        {userdata.map(({ name, id }) => {
          return (
            <NavLink to={`/users/${id}`} key={id}>
              <article className="usercard">
                <h3>{name}</h3>
              </article>
              <br />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
