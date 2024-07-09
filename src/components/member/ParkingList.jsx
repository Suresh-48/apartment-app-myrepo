import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ParkingList = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="page-content">
          <div className="page-nav-btn">
            <a href="/parking">
              <button className="btn-add">Add Parking</button>
            </a>
          </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Parking List</h4>
                  </div>
                  <div class="table-line-align">
                    <table class="table  custom-table comman-table datatable mb-0">
                      <thead>
                        <tr className="row-space">
                          <th>SI.No</th>
                          <th>Type</th>
                          <th>Make and Model</th>
                          <th>Parking Number</th>
                          <th>Vehicle registration Number</th>
                          <th>Received parking sticker</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="btn-crud">
                            <button class="btn ">
                              <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="btn  ">
                              <i class="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col-lg-12 btn-next-align">
                      <button className="btn-previous">Previous</button>
                      <button className="btn-next">Next</button>
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

export default ParkingList;
