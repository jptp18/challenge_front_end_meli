import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectItem } from "../redux/settings/actions";
import "../assets/scss/item.scss";
import shipping from "../assets/images/ic_shipping.png";
import { formatPrice } from "../common/utils";

const Item = ({ item }) => {
  console.log(item);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewDetail = () => {
    dispatch(selectItem(item.id));
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="item" onClick={viewDetail}>
      <div className="item__general">
        <img src={item.picture} alt={item.title || "Producto sin título"} />
        <div className="item__resume">
          <div className="item__resume--title">
            <h1>{formatPrice(item.price.amount)}</h1>
            {item.free_shipping && <img src={shipping} alt="Free shipping" />}
          </div>
          <h2>{item.title}</h2>
        </div>
      </div>
      <span>{item.address}</span>
    </div>
  );
};

export default Item;