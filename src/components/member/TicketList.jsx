import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ReactStars from "react-rating-stars-component";


const TicketList = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
        
  return (
    <div>
       <Header/>
       <Sidebar/>
       <div className="page-wrapper">
        <div className="page-content">
        <div className="page-nav-btn">
            <a href="/ticket"><button className="btn-add">Add Ticket</button></a>
        
        </div>
          <div className="profile-form">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="page-form-head">
                    <h4>Ticket List</h4>
                  </div>
                  <div class="table-line-align">
                    <table class="table  custom-table comman-table datatable mb-0">
                      <thead>
                        <tr className="row-space">
                          <th>Type of Query</th>
                          <th>Type of Sub Query</th>
                          <th>Status</th>
                          <th>Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style={{display:"flex", justifyContent:"center"}}>
                          <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={24}
                              activeColor="#ffd700"
                            />
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
  )
}

export default TicketList