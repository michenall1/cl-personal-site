import { Router, Route, browserHistory } from 'react-router';
import React, { Component } from 'react';
import App from './app/containers/App';
import Gallery from './gallery/containers/Gallery';
import About from './about/components/About';

class AppRouter extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/gallery/:galleryName" component={Gallery}/>
          <Route path="about" component={About}/>
          {/**
          <Route path="contact" component={Contact}/>
          <Route path="*" component={NoMatch}/>
          */}
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
