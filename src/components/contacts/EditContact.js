import React, { Component } from "react";
import TextInputgroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { getContact, updateContact } from "../actions/ContactActions";

class EditContact extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(parseInt(id));
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.contact) {
      const { id, name, phone, email } = nextProps.contact;
      this.setState({ id, name, phone, email });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdateContact = (e) => {
    e.preventDefault();
    const { id, name, email, phone } = this.state;
    //check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      id,
      name,
      email,
      phone,
    };
    this.props.updateContact(newContact);

    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <div
        className="card col-md-3"
        style={{ marginLeft: "40%", marginRight: "20%" }}
      >
        <h5
          className="card-header info-color white-text text-center py-4"
          style={{ marginTop: "5%" }}
        >
          <strong>Edit Contact </strong>
        </h5>

        <div className="card-body px-lg-5 pt-0">
          <form
            className="text-center"
            style={{ color: "#757575" }}
            onSubmit={this.onUpdateContact.bind(this)}
          >
            <TextInputgroup
              name="name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputgroup
              name="email"
              type="email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputgroup
              name="phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />

            <button
              className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect"
              type="submit"
            >
              Update Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactReducer.contact,
});
export default connect(mapStateToProps, {
  getContact,
  updateContact,
})(EditContact);
