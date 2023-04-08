import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import About from './Componets/About';
import NavLink from "./Componets/Navlinks";
import Success from "./Componets/Success";
import Notfound from "./Componets/404error";
import Projects from "./Componets/projects";
import Featuredproject from "./Componets/featured-project";
import Presentprojects from "./Componets/present-projects";
import Users from "./Componets/users";
import Userdetails from "./Componets/Userdetails";
import Drinks from "./Drinksapi/Drinks";
import Drinkslist from "./Drinksapi/Drinkslist";
import Login from "./login/Login";
import Logout from "./login/Logout";
import { Authprovider } from "./login/auth";
import PrivateRoute from "./login/PrivateRoute";
import Portfolio from "./Componets/portfolio/portfolio";

const Lazyabout = React.lazy(() => import("./Componets/About"));

const App = () => {
  return (
    <Authprovider>
      <NavLink />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Portfolio />} />

        <Route
          path="/About"
          element={
            <React.Suspense fallback="Loading....">
              <Lazyabout />
            </React.Suspense>
          }
        />
        <Route path="/Success" element={<Success />} />

        <Route path="/Projects" element={<Projects />}>
          <Route path="Featuredproject" element={<Featuredproject />} />
          <Route path="Presentprojects" element={<Presentprojects />} />
        </Route>

        <Route path="*" element={<Notfound />} />

        <Route path="/users" element={<Users />} />

        <Route
          path="/users/:userid"
          element={
            <PrivateRoute>
              <Userdetails />
            </PrivateRoute>
          }
        />

        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Drinks/:cooldrink" element={<Drinkslist />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </Authprovider>
  );
};

export default App;
