import React, { Component } from "react";

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
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
      },
      {
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        phone: "493-170-9623 x156",
      },
      // {
      //   id: 5,
      //   name: "Chelsey Dietrich",
      //   phone: "(254)954-1289",
      // },
      // {
      //   id: 6,
      //   name: "Mrs. Dennis Schulist",
      //   phone: "1-477-935-8478 x6430",
      // },
      // {
      //   id: 7,
      //   name: "Kurtis Weissnat",
      //   phone: "210.067.6132",
      // },
      // {
      //   id: 8,
      //   name: "Nicholas Runolfsdottir V",
      //   phone: "586.493.6943 x140",
      // },
      // {
      //   id: 9,
      //   name: "Glenna Reichert",
      //   phone: "(775)976-6794 x41206",
      // },
      // {
      //   id: 10,
      //   name: "Clementina DuBuque",
      //   phone: "024-648-3804",
      // },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
