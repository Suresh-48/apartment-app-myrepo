import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FamilyMember = () => {
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
                  <a href="#">Family members</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add family
                </li>
              </ol>
            </div>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Add Family Member Details</h4>
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
                        Relation Type<span className="login-danger">*</span>
                      </label>
                      <select className="form-control form-select">
                        <option value="">Select Relation</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="daughte">Daughter</option>
                        <option value="son">Son</option>
                        <option value="sister">Sister</option>
                        <option value="brother">Brother</option>
                        <option value="uncle">Uncle</option>
                        <option value="aunty">Aunty</option>
                        <option value="nephew">Nephew</option>
                        <option value="cousinmale">Cousin (female)</option>
                        <option value="cousinfemale">Cousin (male)</option>
                        <option value="grandmother">Grandmother</option>
                        <option value="grandfather">Grandfather</option>
                        <option value="grandson">Grandson</option>
                        <option value="stepsister">Stepsister</option>
                        <option value="stepbrother">Stepbrother</option>
                        <option value="stepmother">Stepmother</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Is Co-Owner<span className="login-danger">*</span>
                      </label>
                      <select className="form-control form-select">
                        <option value="">Select Co-Owner</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Is Nominated<span className="login-danger">*</span>
                      </label>
                      <select className="form-control  form-select">
                        <option value="">Select Nominate</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Age<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="number" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Phone number<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="number" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Email Id<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="col-lg-4 form-group form-align">
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

export default FamilyMember;
