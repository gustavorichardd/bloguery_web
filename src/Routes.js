import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'

export default function Routes() {
 return (
  <BrowserRouter>
   <Switch>
    <Route path="/" component={Home} exact />
   </Switch>
  </BrowserRouter>
 )
}