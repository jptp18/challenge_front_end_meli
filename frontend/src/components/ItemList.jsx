import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setItems, setSearch, clearCategories } from "../redux/settings/actions";
import { URL_API } from "../common/constants";
import searchIcon from "../assets/images/not-found.svg";
import { TailSpin } from "react-loader-spinner";
import Item from "./Item";
import "../assets/scss/itemList.scss";

const ItemList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items, search, noItems } = useSelector((state) => ({
    items: state.items,
    search: state.search,
    noItems: state.noDataItems,
  }));

  const [isLoading, setIsLoading] = useState(false);

  // Obtén el parámetro "search" de la URL y actualiza el estado global
  useEffect(() => {
    const urlParam = new URLSearchParams(location.search).get("search");
    if (urlParam && urlParam !== search) {
      dispatch(setSearch(urlParam));
    }
  }, [location.search, search, dispatch]);

  // Fetch de los items cuando cambia el estado "search"
  useEffect(() => {
    if (search) {
      // Limpia las categorías antes de realizar la nueva búsqueda
      dispatch(clearCategories());
      fetchItems();
    }
  }, [search, dispatch]);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${URL_API}/api/items?q=${search}`);
      const data = await response.json();
      dispatch(setItems(data));
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="main-container">
          <TailSpin type="TailSpin" color="#FFE600" height={80} width={80} />
        </div>
      );
    }

    if (Array.isArray(items) && items.length > 0) {
      return (
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index}>
              <Item item={item} />
            </li>
          ))}
        </ul>
      );
    }

    const message = noItems
      ? "No hay publicaciones que coincidan con tu búsqueda."
      : "Busca, encuentra, compra fácil.";
    return (
      <div className="main-container">
        <img className="icon-search" src={searchIcon} alt="Search Icon" />
        <h1 className="search-initial-text">{message}</h1>
      </div>
    );
  };

  return <div className="item-list-container">{renderContent()}</div>;
};

export default ItemList;
