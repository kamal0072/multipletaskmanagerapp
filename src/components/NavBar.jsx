import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  
  return (
    <>
      <ul className="flex justify-around gap-4 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text text-danger font-black" : ""}
          >
            Tip Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "text text-danger font-black" : ""}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/index"
            className={({ isActive }) =>isActive ? "underline underline-offset-4 text-danger font-black":""}
          >
            index
          </NavLink>
        </li>
        <li>
          <NavLink to="*">Library</NavLink>
        </li>
        <li>
          <NavLink to="*">Catalogue</NavLink>
        </li>
        <li>
          <NavLink to="*">Services</NavLink>
        </li>
        <li>
          <NavLink to="*">Todo App</NavLink>
        </li>
        <li>
          <NavLink to="*">Task manaeger</NavLink>
        </li>
      </ul>
    </>
  );
}
