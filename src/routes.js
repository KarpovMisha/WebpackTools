import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Instagram, Facebook } from 'containers';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='instagram' component={Instagram} />
    <Route path='facebook' component={Facebook} />
  </Route>
)
