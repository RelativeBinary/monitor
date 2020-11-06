import React from 'react';
import './App.css';

import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import {Problem} from './components/Problem';

//{/* Solution Components */}
import {IoT} from './components/IoT';
import {DataCollection} from './components/DataCollection';
import {DocumentManagement} from './components/DocumentManagement';
import { AccessControl } from './components/AccessControl';
import {FutureGoals} from './components/FutureGoals';

//{/*Resource Components */}


//{/*About Components*/}
import { AboutUs } from './components/AboutUs';
import { DesignMethodology } from './components/DesignMethodology';
import { Technology } from './components/Technology';
import { MeetTheTeam } from './components/MeetTheTeam';

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
        <Route path='/access-control' component={AccessControl} exact />
        <Route path='/future-goals' component={FutureGoals} exact />
        <Route path='/about-us' component={AboutUs} exact />
        <Route path='/design-methodology' component={DesignMethodology} exact />
        <Route path='/technology' component={Technology} exact />
        <Route path='/team' component={MeetTheTeam} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;