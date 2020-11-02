import React from 'react';
import './App.css';

import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import {Problem} from './components/Problem';

//{/* Solution Components */}
import {IoT} from './components/IoT';
import {DataCollection} from './components/DataCollection';
import {DocumentManagement} from './components/DocumentManagement';
import {FutureGoals} from './components/FutureGoals';

//{/*Resource Components */}


//{/*About Components*/}
import { AboutUs } from './components/AboutUs';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/monitor' component={Home} exact />
        <Route path='/problem' component={Problem} exact />
        {/*Solution Components*/}
        <Route path='/iot' component={IoT} exact />
        <Route
          path='/data-collection'
          component={DataCollection}
          exact
        />
        <Route
          path='/document-management'
          component={DocumentManagement}
          exact
        />
        <Route path='/future-goals' component={FutureGoals} exact />
        <Route path='/about-us' component={AboutUs} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;