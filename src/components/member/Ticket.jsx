import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Ticket = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="page-content">
          <div className="page-title">
            <div className="row">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Ticket</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Ticket
                </li>
              </ol>
            </div>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Ticket Details</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Type of Query<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Type of Sub Query<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-12">
                      <label className="form-label">Remarks<span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        rows="4"
                        cols="50"
                      ></textarea>

                      <div className="col-lg-4 form-align mt-3">
                        <input
                          className="form-control"
                          type="file"
                          name="addressproof"
                          accept="image/*"
                          // application/pdf
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 btn-end-align">
                      <button className="btn-submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
