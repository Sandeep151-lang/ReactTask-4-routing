import React from 'react'
import Sidebars from './components/Sidebars'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Button from './components/Button';
import ColorUtilities from './components/ColorUtilities';
import BorderUtilites from './components/BorderUtilites';
import AnimationUtilies from './components/AnimationUtilies';
import OtherUtilities from './components/OtherUtilities';
import Charts from './components/Charts';
import Tables from './components/Tables';
import Dashboards from './Dashboards';


const App = () => {
  return <>

    <div id="wrapper">
      <Router basename="/ReactTask-4-routing">
        <Sidebars />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Dashboard />
            <Switch>
              <Route exact path="/ReactTask-4-routing" component={Dashboards} />
              <Route exact path="/ReactTask-4-routing/cards" component={Cards} />
              <Route exact path="/ReactTask-4-routing/buttons" component={Button} />
              <Route exact path="/ReactTask-4-routing/colors" component={ColorUtilities} />
              <Route exact path="/ReactTask-4-routing/border" component={BorderUtilites} />
              <Route exact path="/ReactTask-4-routing/animation" component={AnimationUtilies} />
              <Route exact path="/ReactTask-4-routing/Others" component={OtherUtilities} />
              <Route exact path="/ReactTask-4-routing/chart" component={Charts} />
              <Route exact path="/ReactTask-4-routing/table" component={Tables} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>

  </>
}
export default App
