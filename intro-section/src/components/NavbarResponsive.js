import { useRef, useState, useEffect } from "react";
import IconArrow from "./IconArrow";
import todo from "../img/icon-todo.svg";
import calendar from "../img/icon-calendar.svg";
import reminders from "../img/icon-reminders.svg";
import planning from "../img/icon-planning.svg";

import "./NavbaResponsive.css";

const NavbarResponsive = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  let featuresMenuRef = useRef();
  let companyMenuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!featuresMenuRef.current.contains(e.target)) {
        setOpenFeatures(false);
      }
      if (!companyMenuRef.current.contains(e.target)) {
        setOpenCompany(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const changeMenu = () => {
    if (openMenu) {
      setOpenMenu(!openMenu);
    } else {
      setOpenMenu(!openMenu);
    }
  };

  return (
    <div className="navbar-responsive">
      <div className="menu-toggle">
        {openMenu ? (
          <button
            className="button-menu"
            onClick={changeMenu}
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fillRule="evenodd">
                <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
              </g>
            </svg>
          </button>
        ) : (
          <button
            className="button-menu"
            onClick={changeMenu}
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fillRule="evenodd">
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
              </g>
            </svg>
          </button>
        )}
      </div>

      <ul className={`ul-nav-responsive ${openMenu ? "active" : "disabled"}`}>
        <li>
          <div
            ref={featuresMenuRef}
            className="dropdown"
            onClick={() => {
              setOpenFeatures(!openFeatures);
            }}
          >
            <div className="dropdown-main">
              <button className="btn">Features</button>
              <IconArrow isActive={openFeatures} />
            </div>
            <div
              className={`dropdown-menu ${
                openFeatures ? "active" : "inactive"
              }`}
            >
              <ul>
                <DropdownItem img={todo} checkImage="true" text={"Todo List"} />
                <DropdownItem
                  img={calendar}
                  checkImage="true"
                  text={"Calendar"}
                />
                <DropdownItem
                  img={reminders}
                  checkImage="true"
                  text={"Reminders"}
                />
                <DropdownItem
                  img={planning}
                  checkImage="true"
                  text={"Planning"}
                />
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={companyMenuRef}
            className="dropdown"
            onClick={() => {
              setOpenCompany(!openCompany);
            }}
          >
            <div className="dropdown-main">
              <button className="btn">Company</button>
              <IconArrow isActive={openCompany} />
            </div>

            <div
              className={`dropdown-menu ${openCompany ? "active" : "inactive"}`}
            >
              <ul>
                <DropdownItem text={"History"} />
                <DropdownItem text={"Our Team"} />
                <DropdownItem text={"Blog"} />
              </ul>
            </div>
          </div>
        </li>
        <li>
          <button className="btn">Careers</button>
        </li>
        <li>
          <button className="btn">About</button>
        </li>

        <div className="nav-right-responsive">
          <li>
            <button className="btn">Login</button>
          </li>
          <li>
            <button className="btn-register-responsive">Register</button>
          </li>
        </div>
      </ul>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li>
      {props.img !== undefined ? <img src={props.img} alt="img"></img> : ""}
      <a href="text"> {props.text} </a>
    </li>
  );
}

export default NavbarResponsive;
