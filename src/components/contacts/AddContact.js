import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card col-md-3" style={{ float: "right" }}>
        <h5
          className="card-header info-color white-text text-center py-4"
          style={{ marginTop: "5%" }}
        >
          <strong>Add New Contact </strong>
        </h5>

        <div className="card-body px-lg-5 pt-0">
          <form
            className="text-center"
            style={{ color: "#757575;" }}
            action="#!"
          >
            <div className="md-form mt-3">
              <input
                type="text"
                name="name"
                id="materialContactFormName"
                className="form-control"
                value={name}
                onChange={this.onChange}
              />
              <label for="materialContactFormName">Name</label>
            </div>

            <div className="md-form">
              <input
                type="email"
                name="email"
                id="materialContactFormEmail"
                className="form-control"
                value={email}
                onChange={this.onChange}
              />
              <label for="materialContactFormEmail">E-mail</label>
            </div>

            <div className="md-form">
              <input
                type="text"
                name="phone"
                id="materialContactForPhoneNumber"
                className="form-control"
                value={phone}
                onChange={this.onChange}
              />
              <label for="materialContactForPhoneNumber">Phone</label>
            </div>

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
  }
}

export default AddContact;
