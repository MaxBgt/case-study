import {
  faFlaskVial,
  faGears,
  faHome,
  faListCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-elements">
        <FontAwesomeIcon icon={faGears} className="logo" />
        <li className="home">
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <p>Clients</p>
          </Link>
        </li>
        <li>
          <Link href="/tests">
            <FontAwesomeIcon icon={faFlaskVial} className="icon" />
            <p>Tests</p>
          </Link>
        </li>
        <li>
          <Link href="/process">
            <FontAwesomeIcon icon={faListCheck} className="icon" />
            <p>Process</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
