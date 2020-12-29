import React from 'react';
import { Route, Switch } from "react-router";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from './component/routing/ProtectedRoute'
import Ourteam from './component/ourteam/Ourteam'
import DashboardActions from './component/adminwork/DashboardActions'
import AddReview from './component/createForm/AddReview'
import AddTeamMember from './component/createForm/AddTeamMember'
import Login from './component/auth/Login'
import Services from './component/services/Services'
import {Navbar} from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import {WhyUs} from './component/whyus/WhyUs'
import Home from './component/home/Home'
import Picture from './component/Gallery/Picturee4'
import Packages from './component/packages/Packages'

function App() {
  return (
    <>
    <Navbar/>
    {/* <Packages/> */}
    <Switch>
    
    <Route exact path = "/" component={Home}/> 
    <Route exact path = "/gallery1" component={Picture}/> 
    <Route exact path = "/ourteam" component={Ourteam}/>
    <Route exact path = "/whyus" component={WhyUs}/>
    <Route exact path = "/services" component={Services}/>
    <Route exact path = "/footer" component={Footer}/>
    <ProtectedRoute exact path="/logout" component={Login} /> 
    <ProtectedRoute exact path="/dashboard" component={DashboardActions} />
    <Route exact path="/add-review" component={AddReview} />
      <Route exact path="/add-team-member" component={AddTeamMember} />
    </Switch>
    <Footer/>
    </>
//<section className= "ourteambackground">

  //      </section>
  );
}

export default App;
