import {
  SET_SEARCH_FIELD,
  SET_ITEMS,
  SET_ITEM,
  CLEAR_ITEMS,
  CLEAR_SEARCH_FIELD,
  SET_CATEGORIES,
  CLEAR_CATEGORIES
} from "./settings/actionTypes";

const initialState = {
  items: [],
  categories: [],
  search: "",
  selectedItem: "",
  noDataItems: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_FIELD: {
      const { text } = action.payload;
      return { ...state, search: text };
    }
    case SET_ITEMS: {
      const { items = [], categories = [] } = action.payload; // Aseguramos que sea un array
      const noDataItems = items.length === 0; // Puede simplificarse de esta forma
      return { ...state, items, categories, noDataItems };
    }
    case SET_ITEM: {
      const { selectedItem } = action.payload;
      return { ...state, selectedItem };
    }
    case CLEAR_ITEMS: {
      return { ...state, items: [], categories: [], noDataItems: false }; // También restablecemos noDataItems
    }
    case CLEAR_SEARCH_FIELD: {
      return { ...state, search: "" };
    }
    case SET_CATEGORIES: {
      const { categories } = action.payload;
      return { ...state, categories };
    }
    case CLEAR_CATEGORIES:{
      return { ...state, categories: [] };
    }
    default:
      return state;
  }
}
