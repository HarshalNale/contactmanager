import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { GET_CONTACTS } from "../actions/types";
import PropTypes from "prop-types";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "a",
        email: "a@gmail.com",
        phone: "111222333",
      },
      { id: 2, name: "b", email: "b@gmail.com", phone: "444555666" },
      { id: 3, name: "c", email: "c@gmail.com", phone: "777888999" },
    ],
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} />
    ));
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contactReducer.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch({ type: GET_CONTACTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
