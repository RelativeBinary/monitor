import React from 'react';
import './App.css';

import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { TaskManagement } from './components/TaskManagement';
import { EquipmentMonitoring } from './components/EquipmentMonitoring';
import { OrganisationManagement } from './components/OrganisationManagement';
import { Analytics } from './components/Analytics';
import { UserManual } from './components/UserManual';
import { SecurityFeatures } from './components/SecurityFeatures';
import { MeetTheTeam } from './components/MeetTheTeam';
import { TechnologyStack } from './components/TechnologyStack';
import { StyleGuide } from './components/StyleGuide';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/monitor' component={Home} exact />
        <Route
          path='/monitor/task-management'
          component={TaskManagement}
          exact
        />
        <Route
          path='/monitor/equipment-monitoring'
          component={EquipmentMonitoring}
          exact
        />
        <Route
          path='/monitor/organisation-management'
          component={OrganisationManagement}
          exact
        />
        <Route path='/monitor/analytics' component={Analytics} exact />
        <Route path='/monitor/user-manual' component={UserManual} exact />
        <Route
          path='/monitor/security-features'
          component={SecurityFeatures}
          exact
        />
        <Route path='/monitor/meet-the-team' component={MeetTheTeam} exact />
        <Route
          path='/monitor/technology-stack'
          component={TechnologyStack}
          exact
        />
        <Route path='/monitor/style-guide' component={StyleGuide} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
