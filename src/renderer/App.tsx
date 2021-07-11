import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => (
  <div>
    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
    <span>Hello notes 🙏</span>
  </div>
);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
