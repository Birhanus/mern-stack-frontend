import React from 'react';
import Dashbord from './pages/Dashbord';
import { NavBar } from './components';
import { EmployeesList, EmployeesInsert, EmployeesUpdate } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Dashbord} />
                <Route path="/employees/list" exact component={EmployeesList} />
                <Route path="/employees/create" exact component={EmployeesInsert} />
                <Route
                    path="/employees/update/:id"
                    exact
                    component={EmployeesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App

