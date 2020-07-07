import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../actions/ContactActions";

class Contacts extends Component {
  state = {};

  componentDidMount() {
    if (this.props.contacts.length === 0) this.props.getContacts();
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

// const mapDispatchToProps = () => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS }),
// });

export default connect(mapStateToProps, {
  getContacts,
})(Contacts);
