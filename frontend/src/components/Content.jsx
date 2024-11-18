import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Content = ({ children }) => {
  const categories = useSelector((state) => state.categories);
  const location = useLocation();

  // Mostrar breadcrumb solo si hay categorías y no estamos en la raíz
  const isBreadcrumbVisible =
    location.pathname !== "/" && Array.isArray(categories) && categories.length > 0;

  useEffect(() => {
    console.log("Location changed:", location.pathname);
  }, [location]);

  return (
    <main>
      {isBreadcrumbVisible ? (
        <ul className="list-breadcrumb">
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      ) : (
        <p className="no-categories list-breadcrumb"></p>
      )}
      <div className="list-container">{children}</div>
    </main>
  );
};

export default Content;
