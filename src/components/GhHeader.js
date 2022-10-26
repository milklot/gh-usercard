import React from "react";
import "../App.js";
import { FaGithub } from "react-icons/fa";

export const GhHeader = () => {
  return (
    <div className="header-container">
      <a href="https://github.com/milklot/gh-usercard">
        <FaGithub size={80} />
      </a>
    </div>
  );
};
