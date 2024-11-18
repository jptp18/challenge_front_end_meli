import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import Layout from "./components/Layout";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import InitialSearch from './components/InitialSearch';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<InitialSearch />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
