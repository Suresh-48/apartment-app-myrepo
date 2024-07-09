import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Pet = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className="page-wrapper">
        <div className="page-content">
          <div className="page-title">
            <div className="row">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Pets</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Add Pets
                </li>
              </ol>
            </div>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Pet Details</h4>
                  </div>
                  <div className="row">
                  <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Type of pet<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                   <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Name<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Breed<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                        Color<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                      Age<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="number" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                      Weight (Kg)<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="number" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                      Identity Marks<span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">
                      Comments
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-lg-4 form-align">
                      <label className=" form-label">Vaccinated</label>
                      <div className="radio-group res-group">
                        <label>
                          <input type="radio" name="vaccinate" value="yes" />
                          Yes
                        </label>
                        <label>
                          <input type="radio" name="vaccinate" value="no" />
                          No
                        </label>
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
  )
}

export default Pet