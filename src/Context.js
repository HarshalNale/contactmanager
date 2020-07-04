import React, { Component } from "react";
import request from "superagent";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      const max = Math.max.apply(
        null,
        state.contacts.map((item) => item.id)
      );
      action.payload.id = max + 1;
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  async componentDidMount() {
    const res = await request.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.body });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
