import React from "react";
import "../../assets/styles/Home.css";

const Catagory = () => {
  return (
    <div className="Catagories-main-container">
      <div className="catagories-container-heading">
        <h1>Shop our top Catagories</h1>
      </div>
      <div className="catagories-container-details">
        <div className="card-catagories">
          <div className="cards furniture">Furniture</div>
          <div className="cards handbags">HandBags</div>
          <div className="cards books">Books</div>
          <div className="cards techs">Techs</div>
          <div className="cards sneakers">Sneakers</div>
          <div className="cards travels">Travels</div>
          <div className="cards furniture">Furniture</div>
          <div className="cards handbags">HandBags</div>
          <div className="cards books">Books</div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
