import React from "react";
import contact from "./contact.png";
const AboutUs = (props) => {
  return (
    <React.Fragment>
      <header>
        <div style={{ backgroundColor: "lightgreen" }}>
          <div className="mask rgba-indigo-slight">
            <div className="container h-100 d-flex justify-content-center align-items-center">
              <div className="row pt-5 mt-3">
                <div className="col-md-12 mb-3">
                  <div className="intro-info-content text-center">
                    <h1
                      className="display-3 blue-text mb-5 wow fadeInDown"
                      data-wow-delay="0.3s"
                    >
                      ABOUT
                      <a className="blue-text font-weight-bold">ME</a>
                    </h1>
                    <h5
                      className="text-uppercase blue-text mb-5 mt-1 font-weight-bold wow fadeInDown"
                      data-wow-delay="0.3s"
                    ></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <section className="text-center team-section">
            <div className="row text-center">
              <div className="col-md-12 mb-4" style={{ marginTop: "-100px" }}>
                <div className="avatar mx-auto">
                  <img
                    src={contact}
                    className="img-fluid rounded-circle z-depth-1"
                    alt="First
                  sample avatar image"
                    style={{ marginTop: "30px" }}
                  />
                </div>
                <h3 className="my-3 font-weight-bold">
                  <strong>Harshal Nale</strong>
                </h3>
                <h6 className="font-weight-bold teal-text mb-4">
                  Software Engineer
                </h6>
                <a className="p-2 m-2 fa-lg fb-ic">
                  <i className="fab fa-facebook-f grey-text"> </i>
                </a>
                <a className="p-2 m-2 fa-lg tw-ic">
                  <i className="fab fa-twitter grey-text"> </i>
                </a>
                <a className="p-2 m-2 fa-lg ins-ic">
                  <i className="fab fa-instagram grey-text"> </i>
                </a>
              </div>
            </div>
          </section>
          <section>
            <ul className="nav md-pills pills-default d-flex justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#panel11"
                  role="tab"
                >
                  <strong>About Contact Manager</strong>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade  show active"
                id="panel11"
                role="tabpanel"
              >
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <section className="text-center mb-5">
                      <div className="row mb-4">
                        <div
                          className="col-md-6 mb-4"
                          style={{ marginLeft: "25%" }}
                        >
                          <div
                            className="card card-image"
                            style={{
                              backgroundImage:
                                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(41).jpg')",
                            }}
                          >
                            <div className="text-white text-center d-flex align-items-center rgba-blue-strong py-5 px-4">
                              <div>
                                <h3 className="mb-4 mt-4 font-weight-bold">
                                  <strong>Contact Manager</strong>
                                </h3>
                                <p>
                                  Contact Manager is a simple application to
                                  manager your contacts. it has basic features
                                  to add new contacts and delete contact. user
                                  can also check his added contact list. It is a
                                  static application as we are not storing
                                  contacts in database. if user refresh the
                                  application all contact will be lost except
                                  already available hardcoded contacts.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="panel12" role="tabpanel">
                <br />
              </div>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AboutUs;
