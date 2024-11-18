import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/Logo_ML.png";
import { setSearch, setItems } from "../redux/settings/actions";
import "../assets/scss/header.scss";
import { LANG_ES } from "../common/constants";

const Header = () => {
  const [searchField, setSearchField] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchItems = (event) => {
    event.preventDefault();
    dispatch(setSearch(searchField));
    navigate(`/items?search=${searchField}`);
  };

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <header>
      <nav>
        <form className="search-form" onSubmit={searchItems}>
          <Link to="/" className="logo-link-container">
            <img src={logo} alt="MercadoLibre" />
          </Link>
          <input
            type="text"
            id="search-field"
            placeholder={LANG_ES.SEARCHBAR_PLACEHOLDER}
            className="search-input"
            value={searchField}
            onChange={handleChange}
          />
          <button type="submit" className="search-button"></button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
