import React, { useState, useEffect } from "react";
import Header from "./Header";
import dashboard from "../../assets/sidebar/dashboard.png";
import family from "../../assets/sidebar/family.png";
import parking from "../../assets/sidebar/parking.png";
import pets from "../../assets/sidebar/pets.png";
import ticket from "../../assets/sidebar/ticket.png";
import feedaback from "../../assets/sidebar/feedback.png";
import questions from "../../assets/sidebar/questions.png";
import amenity from "../../assets/sidebar/amenity.png";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  // const [isExpanded, setIsExpanded] = useState({
  //   family: false,
  //   parking: false,
  //   pets: false,
  //   tickets: false,
  //   feedback: false,
  //   feedback: false,
  //   feedback: false,
  //   questions:false,
  //   amenity:false

  // });
  // const handleToggle = (section) => {
  //   setIsExpanded((prevState) => ({
  //     ...prevState,
  //     [section]: !prevState[section],
  //   }));
  // };

  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const getClass = (path) => (activePath === path ? "active" : "");

  return (
    <div>
      <Header />
      <div className="sidebar">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className={getClass("/memberdashboard")}>
              <a href="/memberdashboard">
                <span className="menu-side">
                  <img src={dashboard} alt="dashboard" />
                </span>
                <span className="menubar">Dashboard</span>
              </a>
            </li>

            <li className={getClass("/family-member-list")}>
              <a href="/family-member-list">
                <span className="menu-side">
                  <img src={family} alt="dashboard" />
                </span>
                <span className="menubar"> Family Members </span>
              </a>
            </li>

            <li className={getClass("/parking-list")}>
              <a href="/parking-list">
                <span className="menu-side">
                  <img src={parking} alt="dashboard" />
                </span>
                <span className="menubar"> Parking</span>{" "}
              </a>
            </li>

            <li className={getClass("/pets-list")}>
              <a href="/pets-list">
                <span className="menu-side">
                  <img src={pets} alt="dashboard" />
                </span>
                <span className="menubar"> Pets </span>
              </a>
            </li>

            <li className={getClass("/ticket-list")}>
              <a href="/ticket-list">
                <span className="menu-side">
                  <img src={ticket} alt="dashboard" />
                </span>
                <span className="menubar"> Tickets </span>
              </a>
            </li>

            <li className={getClass("/feedback-list")}>
              <a href="/feedback-list">
                <span className="menu-side">
                  <img src={feedaback} alt="dashboard" />
                </span>
                <span className="menubar"> Feedbacks </span>{" "}
              </a>
            </li>

            <li className={getClass("/questions-list")}>
              <a href="/questions-list">
                <span className="menu-side">
                  <img src={questions} alt="dashboard" />
                </span>
                <span className="menubar"> Questions </span>{" "}
              </a>
            </li>

            <li className={getClass("/amenities-list")}>
              <a href="/amenities-list">
                <span className="menu-side">
                  <img src={amenity} alt="dashboard" />
                </span>
                <span className="menubar">Amenities</span>{" "}
              </a>
            </li>
          </ul>
          <div className="logout-align">
            <a href="/signin">
              {/* <span className="menu-side"></span>{" "} */}
              <span className="btn-logout">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
