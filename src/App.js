import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import PageNotFound from "./components/pages/PageNotFound";
import { Provider } from "react-redux";
import Store from "./components/store/Store";
import EditContact from "./components/contacts/EditContact";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <Header branding="Contact manager" />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/addcontact" component={AddContact} />
            <Route exact path="/edit/contact/:id" component={EditContact} />
            <Route exact path="/about" component={AboutUs} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
