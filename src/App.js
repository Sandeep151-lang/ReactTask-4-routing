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
      <Router>
        <Sidebars />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Dashboard />
            <Switch>
              <Route exact path="/" component={Dashboards} />
              <Route exact path="/cards" component={Cards} />
              <Route exact path="/buttons" component={Button} />
              <Route exact path="/colors" component={ColorUtilities} />
              <Route exact path="/border" component={BorderUtilites} />
              <Route exact path="/animation" component={AnimationUtilies} />
              <Route exact path="/Others" component={OtherUtilities} />
              <Route exact path="/chart" component={Charts} />
              <Route exact path="/table" component={Tables} />

            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>

  </>
}
export default App