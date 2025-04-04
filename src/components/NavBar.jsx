import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  
  return (
    <>
      <ul className="flex justify-around gap-4 mt-3 p-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text underline underline-offset-6 text-red-500 font-black" : ""}
          >
            Tip Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }) => isActive ? "text underline underline-offset-6 text-red-500 font-black" : ""}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/index"
            className={({ isActive }) =>isActive ? "underline underline-offset-6 text-red-500 font-black":""}
          >
            landing Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo"
          className={({ isActive }) =>isActive ? "underline underline-offset-6 text-red-500 font-black":""}
          >Todo App</NavLink>
        </li>
        <li>
          <NavLink to="/TaskManaeger" 
          className={({ isActive }) =>isActive ? "underline underline-offset-6 text-red-500 font-black":""}
          >Task manaeger</NavLink>
        </li>
      </ul>
    </>
  );
}
