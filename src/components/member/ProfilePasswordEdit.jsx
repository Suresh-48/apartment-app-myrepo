import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ProfilePasswordEdit = () => {
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
                  <a href="#">Password</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Edit Password
                </li>
              </ol>
            </div>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Edit Password</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Old Password<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="password" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        New Password<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="password" />
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

export default ProfilePasswordEdit;
