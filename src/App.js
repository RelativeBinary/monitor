import React from 'react';
import './App.css';

import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { TaskManagement } from './components/TaskManagement';
import { EquipmentMonitoring } from './components/EquipmentMonitoring';
import { OrganisationManagement } from './components/OrganisationManagement';
import { Analytics } from './components/Analytics';
import { AboutUs } from './components/AboutUs';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/monitor' component={Home} exact />
        <Route path='/task-management' component={TaskManagement} exact />
        <Route
          path='/equipment-monitoring'
          component={EquipmentMonitoring}
          exact
        />
        <Route
          path='/organisation-management'
          component={OrganisationManagement}
          exact
        />
        <Route path='/analytics' component={Analytics} exact />
        <Route path='/about-us' component={AboutUs} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
