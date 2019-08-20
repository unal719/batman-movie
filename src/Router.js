import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/index.js';
import Detail from './Pages/Detail/index.js';

const Router = (props) => [
  <Route key="/" path="/" component={Home} />,
  <Route key="/detail/:id" path="/detail/:id" component={Detail} />
];

export default Router;