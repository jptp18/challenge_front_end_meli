import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { URL_API, LANG_ES } from "../common/constants";
import { TailSpin } from "react-loader-spinner";
import {
  clearItems,
  clearSearch,
  setCategories,
} from "../redux/settings/actions";
import "../assets/scss/itemDetail.scss";
import { formatPrice } from "../common/utils";
import Popup from "./Popup";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItem);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemId = selectedItem || id;
  
        if (itemId) {
          const response = await fetch(`${URL_API}/api/items/${itemId}`);
          const itemData = await response.json();
          setItem(itemData);
  
          if (Array.isArray(categories) && categories.length === 0) {
            const categoriesResponse = await fetch(
              `${URL_API}/api/categories/${itemData.category_id}`
            );
            const breadcrumb = await categoriesResponse.json();
            dispatch(setCategories(breadcrumb));
          }
        }
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };
  
    fetchData();
  
    return () => {
      dispatch(clearItems());
      dispatch(clearSearch());
    };
  }, [id, selectedItem, categories, dispatch]); 
  

  const formatCondition = (condition) => {
    return condition === "new" ? LANG_ES.NEW : LANG_ES.USED;
  };

  const handleBuyClick = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 2000);
  };


  if (item.id) {
    return (

      <div className="item-detail">
        <div className="item-detail__image">
          <img src={item.picture} alt={item.title} />
        </div>
        <div className="item-detail__info">
          <p>
            {formatCondition(item.condition)} - {item.sold_quantity}{" "}
            {LANG_ES.SOLD}
          </p>
          <h1>{item.title}</h1>
          <h2>{formatPrice(item.price.amount)}</h2>
          <button onClick={handleBuyClick}>{LANG_ES.BUY}</button>
        </div>
        <div className="item-detail__description">
          <h3>{LANG_ES.PRODUCT_DESCRIPTION}</h3>
          <p>{item.description}</p>
        </div>

        {isPopupVisible && 
        
          <Popup item={item} />
        
        }
      </div>


    );
  } else {
    return (
      <div className="main-container">
        <TailSpin type="TailSpin" color="#FFE600" height={80} width={80} />
      </div>
    );
  }
};

export default ItemDetail;
