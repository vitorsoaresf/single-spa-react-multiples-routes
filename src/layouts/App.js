import React from "react";
import { Link } from "react-router-dom";

export const App = ({ children }) => {
  return (
    <main>
      <h1>@vt/react-multiples-routes</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {children}
    </main>
  );
};
