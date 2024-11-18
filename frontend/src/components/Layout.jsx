import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCategories } from "../redux/settings/actions";
import Header from "./Header";
import Content from "./Content";
import "../assets/scss/layout.scss";

const Layout = ({ children }) => {
  const location = useLocation(); 
  const dispatch = useDispatch(); 

  useEffect(() => {

    if (location.pathname === "/") {
      dispatch(clearCategories());
    }
  }, [location.pathname, dispatch]);

  return (
    <div className="container">
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
