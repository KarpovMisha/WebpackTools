import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Network } from 'containers';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="twitter" component={Network} />
      <Route path="/facebook/:id" component={Home} />
    </Route>
  );
};
