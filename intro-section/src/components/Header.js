import "./Header.css";
import logo from "../img/logo.svg";
import IconArrow from "./IconArrow";
import todo from "../img/icon-todo.svg";
import calendar from "../img/icon-calendar.svg";
import reminders from "../img/icon-reminders.svg";
import planning from "../img/icon-planning.svg";

import { useRef, useState, useEffect } from "react";

const Header = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
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

  return (
    <header>
      <nav>
        <div className="nav-left">
          <img className="logo" src={logo} alt="logo"></img>
          <ul className="ul-nav">
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
                    <DropdownItem
                      img={todo}
                      checkImage="true"
                      text={"Todo List"}
                    />
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
                  className={`dropdown-menu ${
                    openCompany ? "active" : "inactive"
                  }`}
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
          </ul>
        </div>

        <div className="nav-right">
          <ul className="ul-nav">
            <li>
              <button className="btn">Login</button>
            </li>
            <li>
              <button className="btn-register">Register</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
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

export default Header;
