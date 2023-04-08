import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div className="center">
      <div>Projects</div>
      <br />

      <div>
        <Link to="/Projects/Featuredproject">Featuredproject</Link>
        <br />
        <br />
        <Link to="/Projects/Presentprojects">Presentprojects</Link>
      </div>
      <br />

      <Outlet />
    </div>
  );
};

export default Projects;
