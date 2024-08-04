import dropDown from "../../../public/assets/icons/icon-arrow-down.svg";
import dropIn from "../../../public/assets/icons/icon-arrow-up.svg";
import todoListIcon from "../../../public/assets/icons/icon-todo.svg";
import calendarIcon from "../../../public/assets/icons/icon-calendar.svg";
import reminderIcon from "../../../public/assets/icons/icon-reminders.svg";
import planningIcon from "../../../public/assets/icons/icon-planning.svg";
import { useEffect, useState } from "react";

const NavItems = ({ mobile }) => {
  const [toggleDropDown, setDropDown] = useState(false);

  useEffect(() => {
    document.querySelector(".js-toggle-menu").addEventListener("click", () => {
      setDropDown(!toggleDropDown);
    });
  });

  return (
    <>
      <ul className={`nav-items${mobile ? "-mobile" : ""}`}>
        <li className="with-dropdown">
          <p className="js-toggle-menu">Features</p>
          <img src={dropDown}></img>
          <div className="dropdown-list">
            
            <div className="dropdown-list-icons">
              <img src={todoListIcon} alt="" />
              <img src={calendarIcon} alt="" />
              <img src={reminderIcon} alt="" />
              <img src={planningIcon} alt="" />
            </div>

            <div className="dropdown-list-items">
              <p>Todo List</p>
              <p>Calender</p>
              <p>Reminders</p>
              <p>Planning</p>
            </div>
            
          </div>
        </li>
        <li className="with-dropdown">
          <p>Company</p>
          <img src={dropDown} />
          <div className="company-dropdown-list">
            <div className="company-dropdown-list-items">
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>
          </div>
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="auth-action">
        <p>Login</p>
        <button>Register</button>
      </div>
    </>
  );
};
export default NavItems;
