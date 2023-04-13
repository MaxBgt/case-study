import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const HomeTestsInProgressCard = () => {
  return (
    <div className="home-container">
      <div className="in-progress-test card">
        <h2 className="title">Tests in progress</h2>
        <ul className="list-test">
          <li>
            - Payment Integration
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />
            <span className="in-progress">In progress</span>
          </li>
          <li>
            - User Profile Update Test
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />
            <span className="in-progress">In progress</span>
          </li>
          <li>
            - Newsletter Subscription Test
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" />
            <span className="in-progress">In progress</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeTestsInProgressCard;
