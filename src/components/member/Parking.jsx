import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Parking = () => {
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
                  <a href="#">Parking</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Parking
                </li>
              </ol>
            </div>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Parking Details</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Type<span className="login-danger">*</span>
                      </label>
                      <select className="form-control form-select">
                        <option value="">Type</option>
                        <option value="bike">Bike</option>
                        <option value="car">Car</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Make and Model<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Parking number<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Vehicle Registration Number
                        <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Received Parking Sticker
                        <span className="login-danger">*</span>
                      </label>
                      <select className="form-control  form-select">
                        <option value="">Received Parking Sticker</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
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

export default Parking;
