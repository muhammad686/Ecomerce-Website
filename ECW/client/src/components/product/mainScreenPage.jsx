import React from "react";
import "../../assets/styles/Home.css";
const MainPage = () => {
  return (
    <div className="home-container">
      <div className="main-contaianer-homepage">
        <div className="container descriptions">
          <h1 className="heading1 ">Sales 20% off</h1>
          <h1 className="heading2">On Everything</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            accusantium eligendi corporis nihil! Possimus sunt molestias ad
            placeat consequatur, qui non odit at doloribus autem harum provident
            nesciunt, quasi enim inventore aliquam officiis nisi ipsum
            distinctio? Pariatur possimus quaerat vel inventore distinctio iure
            culpa earum modi labore. Placeat, eveniet voluptatum.
          </p>
          <button className="shopnow" type="button">
            Shope now
          </button>
          <ul className="sliderdots">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
