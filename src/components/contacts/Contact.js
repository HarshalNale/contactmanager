import React, { Component } from "react";
import PropTypes from "prop-types";
import request from "superagent";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = async (id) => {
    await request.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card col-md-4" style={{ margin: "1%" }}>
        <div className="card-body">
          <h4 className="card-title">
            {" "}
            {name}{" "}
            <i
              onClick={() => {
                this.setState({
                  showContactInfo: !showContactInfo,
                });
              }}
              className={
                showContactInfo ? "fas fa-caret-up" : "fas fa-caret-down"
              }
              style={{ cursor: "pointer" }}
            />
            <i
              className="fas fa-times"
              style={{
                cursor: "pointer",
                color: "red",
                float: "right",
              }}
              onClick={this.onDeleteClick.bind(this, id)}
            />
          </h4>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Contact;
