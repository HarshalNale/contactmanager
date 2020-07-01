import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id, dispatch) => {
    console.log(dispatch);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
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
                    style={{ cursor: "pointer", color: "red", float: "right" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
