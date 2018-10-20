import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// App components
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Left from "./components/left/Left";
import AboutUs from "./components/static/aboutUs/AboutUs";
import Badges from "./components/static/badges/Badges";
import Category from "./components/static/category/Category";
import Contact from "./components/static/contact/Contact";
import Privacy from "./components/static/privacy/Privacy";
import Tags from "./components/static/tags/Tags";
import Terms from "./components/static/terms/Terms";
import Users from "./components/users/Users";
import QuestionDetails from "./components/questionDetail/QuestionDetail";
import Profile from "./components/profile/Profile";
import Right from "./components/right/Right";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="container-fluid">
            <Header />
            <div className="row">
              <div className="col-md-2">
                <Left />
              </div>
              <div className="col-md-8">
                <Route exact path="/" component={Home} />
                <Route path="/questionDetails" component={QuestionDetails} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/badges" component={Badges} />
                <Route path="/category" component={Category} />
                <Route path="/contact" component={Contact} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/tags" component={Tags} />
                <Route path="/terms" component={Terms} />
                <Route path="/users" component={Users} />
                <Route path="/profile" component={Profile} />
              </div>
              <div className="col-md-2 right">
                <Right />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
export default App;
