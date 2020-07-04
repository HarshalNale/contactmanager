import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputgroup from "../layout/TextInputGroup";
import request from "superagent";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
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
      name,
      email,
      phone,
    };

    const res = await request.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.body });

    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div
              className="card col-md-3"
              style={{ marginLeft: "40%", marginRight: "20%" }}
            >
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ marginTop: "5%" }}
              >
                <strong>Add New Contact </strong>
              </h5>

              <div className="card-body px-lg-5 pt-0">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  onSubmit={this.onSubmit.bind(this, dispatch)}
                >
                  <TextInputgroup
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputgroup
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputgroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <button
                    className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    Add Contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
