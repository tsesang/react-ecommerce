import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import './TopNav.css'

// You can also import other FontAwesome icons as needed.

export default function TopNav() {
  return (
    <div className="top-nav">
      <div className="top-nav-content">
        <button>help</button>
        <button>
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
        </button>{" "}
      </div>
    </div>
  );
}




