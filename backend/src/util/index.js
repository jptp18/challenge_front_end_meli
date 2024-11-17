const decimalCounter = value => {
  return Number.isInteger(value) ? 0 : value.toString().split(".")[1]?.length || 0;
};


const formatItem = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping,
  address,
  sold_quantity,
  category_id
}) => {
  return {
    id,
    title,
    condition,
    price: {
      currency: currency_id,
      amount: price,
      decimals: decimalCounter(price)
    },
    picture: thumbnail,
    free_shipping: shipping.free_shipping,
    address: address ? address.state_name : null,
    sold_quantity,
    category_id
  };
};

const formatResponse = (items, categories) => {
  return {
    author: {
      name: "Juan",
      lastname: "Trejo"
    },
    categories: categories
      ? categories.values[0].path_from_root.map(category => category.name)
      : [],
    items: items.slice(0, 4).map(item => formatItem(item))
  };
};

module.exports = { formatItem, formatResponse };
