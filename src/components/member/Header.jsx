import React from "react";
import Logo from "../../assets/login-logo.png";
import avatar from "../../assets/avatar.png";
import "../../global.css";
import "../../index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="#" className="logo">
          <img src="" width="" height="" alt="Logo" />
          <span>Apartment Management</span>
        </a>
      </div>
      <ul className="nav user-menu float-end">
        <li className="nav-item dropdown  has-arrow user-profile-list">
          <a
            href="#"
            className="dropdown-toggle nav-link user-link" 
            data-bs-toggle="dropdown"
          >
            <div class="user-names">
              <h5>Arjun</h5>
              <span>ASSOCIATION Member - Block A - Door No.10</span>
            </div>
            <span className="user-img">
              <img src={avatar} alt="User" />
            </span>
          </a>
          <div className="dropdown-menu">
                <a className="dropdown-item" href="/profile-edit">My Profile</a>
                <a className="dropdown-item" href="/profile-password-edit">Edit Password</a>
                <a className="dropdown-item" href="/signin">Logout</a>
            </div>
        </li>
      </ul>
      
    
    {/* <ul class="nav user-menu float-end">
        <li class="nav-item dropdown has-arrow user-profile-list">
            <a href="#" class="dropdown-toggle nav-link user-link" data-bs-toggle="dropdown">
                <div class="user-names">
                    <h5></h5>
                    <span></span>
                </div>
                <span class="user-img">
                    <img src="../assets/img/user-06.jpg" alt="Admin"/>
                </span>
            </a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="profile-edit.php">My Profile</a>
                <a class="dropdown-item" href="profile-password-edit.php">Edit Password</a>
                <a class="dropdown-item" href="logout.php">Logout</a>
            </div>
        </li>
    </ul>
    <div class="dropdown mobile-user-menu float-end">
        <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
        <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="profile-edit.php">My Profile</a>
            <a class="dropdown-item" href="profile-password-edit.php">Edit Password</a>
            <a class="dropdown-item" href="logout.php">Logout</a>
        </div>
    </div> */}
    </div>
  );
};

export default Header;
