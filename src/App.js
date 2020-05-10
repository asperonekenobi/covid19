import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Header from './Header';
import Summary from './summary/Summary';
import Detailed from './detailed/Detailed';

function App() {
  return (
        <Container maxWidth='md'>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Summary />
              </Route>
              <Route path='/detailed'>
                <Detailed />
              </Route>
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </Router>
        </Container>
  );
}

export default App;
