import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import Provider from "./Context";
import AddContact from "./components/contacts/AddContact";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Header branding="Contact manager" />
        <AddContact />
        <Contacts />
      </Provider>
    );
  }
}

export default App;
