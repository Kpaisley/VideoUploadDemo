import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {

  render() {
    return (
      <Layout>
        <Routes>
          <Route index="true" element={<Home />} ></Route>
          <Route path="counter" element={<Counter />} ></Route>
          <Route path="fetch-data" element={<FetchData />} ></Route>
        </Routes>
      </Layout>
    );
  }
}
