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
      <Router basename="/">
        <Sidebars />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Dashboard />
            <Switch>
              <Route path="/cards" component={Cards} />
              <Route path="/buttons" component={Button} />
              <Route path="/colors" component={ColorUtilities} />
              <Route path="/border" component={BorderUtilites} />
              <Route path="/animation" component={AnimationUtilies} />
              <Route path="/Others" component={OtherUtilities} />
              <Route path="/chart" component={Charts} />
              <Route path="/table" component={Tables} />
              <Route exact path="/" component={Dashboards} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>

  </>
}
export default App
