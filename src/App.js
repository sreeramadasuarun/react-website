import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import NavLink from "./routes/navbar/Navlinks";
import { UserAuthContextProvider } from "./login/UserAuthContext";
import Success from "./Componets/tabs/Success";
import Notfound from "./Componets/tabs/404error";
import Projects from "./Componets/tabs/projects";
import Featuredproject from "./Componets/tabs/featured-project";
import Presentprojects from "./Componets/tabs/present-projects";
import Users from "./Componets/users/users";
import Userdetails from "./Componets/users/Userdetails";
import Drinks from "./Componets/Drinksapi/Drinks";
import Drinkslist from "./Componets/Drinksapi/Drinkslist";
import Login from "./login/Login";
import Logout from "./login/Logout";
import PrivateRoute from "./login/PrivateRoute";
import Portfolio from "./Componets/portfolio/portfolio";
import Shop from "./Componets/shopsite/shop.js";
import Shophome from "./shopee/Shopee";
import Cart from "./shop.componets/Cart/Cart";
import Detail from "./shop.componets/Detail/Detail";
import CartDetail from "./shop.componets/CartDetail/CartDetail";

const Lazyabout = React.lazy(() => import("./Componets/tabs/About"));

const App = () => {
  return (
    <UserAuthContextProvider>
      <NavLink />
      <Routes>
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
        <Route path="/Shop" element={<Shop />} />
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
        <Route path="/Shopee" element={<Shophome />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<CartDetail />} />
      </Routes>
      <Cart />
    </UserAuthContextProvider>
  );
};

export default App;
