import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ProfileEdit = () => {
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
                  <a href="#">Profile</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Edit Profile
                </li>
              </ol>
            </div>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Profile Details </h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Name<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Mobile number<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="number" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Email<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Password<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="password" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Whatsapp number<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="number" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Emergency mobile number
                        <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="number" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Date of birth<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="date" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Blood Group</label>
                      <select className="form-control form-select">
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>

                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Gender<span className="login-danger">*</span>
                      </label>
                      <div className="radio-group">
                        <label>
                          <input type="radio" name="gender" value="male" />
                          Male
                        </label>
                        <label>
                          <input type="radio" name="gender" value="female" />
                          Female
                        </label>
                        <label>
                          <input type="radio" name="gender" value="other" />
                          Other
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Member ID
                        <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Block Name<span className="login-danger">*</span>
                      </label>
                      <select className="form-control form-select">
                        <option value="">Select Block</option>
                        <option value="A">Block A</option>
                        <option value="B">Block B</option>
                        <option value="C">Block C</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Flat Number<span className="login-danger">*</span>
                      </label>
                      <select className="form-control form-select">
                        <option value="">Select Flat</option>
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                        <option value="104">104</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Resident type<span className="login-danger">*</span></label>
                      <div className="radio-group res-group">
                        <label>
                          <input type="radio" name="resident" value="owner" />
                          Owner
                        </label>
                        <label>
                          <input type="radio" name="resident" value="rental" />
                          Rental
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Residental address</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Current address</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Occupation type</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Occupation address</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Occupation date</label>
                      <input className="form-control" type="date" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Handover date</label>
                      <input className="form-control" type="date" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Apartment type<span className="login-danger">*</span>
                      </label>
                      <select className="form-control form-select">
                        <option value="">Select Apartment Type</option>
                        <option value="A">Residing Owner</option>
                        <option value="B">Owner residing elsewhere</option>
                        <option value="C">
                          Owner,but provided the apartment for rental
                        </option>
                        <option value="D">Rental Resident</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Maintenance paid by
                        <span className="login-danger">*</span>
                      </label>
                      <div className="radio-group res-group">
                        <label>
                          <input type="radio" name="resident" value="owner" />
                          Owner
                        </label>
                        <label>
                          <input type="radio" name="resident" value="rental" />
                          Rental
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Father’s name / Husband name
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Family members</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Aadhar number<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Upload Photo<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                      />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Address proof<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="addressproof"
                        accept="image/*"
                        // application/pdf
                      />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Owner name<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Owner mobile number
                        <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Ownership status<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Vehicle list</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Number of pets<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Pet details<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Construction agreement
                        <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="addressproof"
                        accept="application/pdf"
                      />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Sale deed - Page 1
                        <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="addressproof"
                        accept="application/pdf"
                      />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Parking letter<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="addressproof"
                        accept="image/*"
                      />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Types of gas connection
                      </label>
                      <div className="radio-group">
                        <label>
                          <input type="radio" name="gas" value="pipe" />
                          Pipe Gas
                        </label>
                        <label>
                          <input type="radio" name="gas" value="cylinder" />
                          Cylinder
                        </label>
                        <label>
                          <input type="radio" name="gas" value="induction" />
                          Induction
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 btn-profile-align">
                      <button className="btn-cancel">Cancel</button>
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

export default ProfileEdit;
