import React from 'react';
import searchIcon from "../assets/images/not-found.svg";

const InitialSearch = () => {
  return (
    <div className="main-container">
        <img className="icon-search" src={searchIcon} alt="Search Icon" />
        <h1 className="search-initial-text">Busca, encuentra, compra fácil.</h1>
      </div>
  )
}

export default InitialSearch