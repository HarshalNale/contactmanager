import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import Provider from "./Context";
import AddContact from "./components/contacts/AddContact";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import PageNotFound from "./components/pages/PageNotFound";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header branding="Contact manager" />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/addcontact" component={AddContact} />
            <Route exact path="/about" component={AboutUs} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
