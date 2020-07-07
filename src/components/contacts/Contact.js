import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../actions/ContactActions";
class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id) => {
    this.props.deleteContact(id);
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
            <span style={{ float: "right" }}>
              <Link to={`/edit/contact/${id}`}>
                <i
                  className="fas fa-pencil-alt "
                  style={{ marginRight: "15px" }}
                />
              </Link>
              <i
                className="fas fa-times"
                style={{
                  cursor: "pointer",
                  color: "red",
                }}
                onClick={this.onDeleteClick.bind(this, id)}
              />
            </span>
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

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToprops = (dispatch) => ({});

export default connect(null, { deleteContact })(Contact);
