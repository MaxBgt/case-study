import React from "react";

const HomeLatestTest = () => {
  return (
    <div className="home-container">
      <div className="lastest-test card">
        <h2 className="title">Latest tests</h2>
        <ul className="list-test">
          <li>- Login Test, Pass</li>
          <li>- Sign UP Test, Pass</li>
          <li>- Password Test, Pass</li>
          <li>- Add Product Test, Fail</li>
          <li>- Edit Article, Pass</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeLatestTest;
