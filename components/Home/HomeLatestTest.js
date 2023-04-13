import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeLatestTest = () => {
  return (
    <div className="home-container">
      <div className="lastest-test card">
        <h2 className="title">Latest tests</h2>
        <ul className="list-test">
          <li>
            - Login Test{" "}
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />
            <span className="pass">Passed</span>
          </li>
          <li>
            - Sign UP Test{" "}
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />{" "}
            <span className="pass">Passed</span>
          </li>
          <li>
            - Password Test{" "}
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />{" "}
            <span className="pass">Passed</span>
          </li>
          <li>
            - Add Product Test{" "}
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />{" "}
            <span className="fail">Failed</span>
          </li>
          <li>
            - Edit Article{" "}
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />{" "}
            <span className="pass">Passed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeLatestTest;
