import React from "react";
import "../assets/styles/Home.css";
// import "../assets/styles/Catagories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import BackgroundImage from "../assets/images/slider-bg.jpg";
const HomePage = () => {
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
const Deals = () => {
  return (
    <div className="deals">
      <div className="deals-container-heading ">
        <h1>Todays best deals for you</h1>
      </div>
      <div className="deals-catagories">
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
        <div className="chose-by-catagory " type="button">
          Education
        </div>
      </div>
      <div className="deals-main-container">
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
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
          <div className="cards techs">Techs</div>
          <div className="cards sneakers">Sneakers</div>
          <div className="cards travels">Travels</div>
        </div>
      </div>
    </div>
  );
};
const Brands = () => {
  return (
    <div className="Brands-main-container">
      <div className="brands-container-heading">
        <h1>Choose by Brands</h1>
      </div>
      <div className="brands-container-details">
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
        <div className="card-brands">
          <div className="card-brands-img"></div>
          <div className="card-brands-details">
            <h4>Brand Name</h4>
            <p>brand description</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Discounts = () => {
  return (
    <div className="discount-main-container">
      <div className="discount-container-heading">
        <h1>Get upto 70% off</h1>
      </div>
      <div className="discount-container-details">
        <div className="discount-card-container">
          <div className=" discount-details">
            <h3>Save</h3>
            <h2>
              <sup>$</sup>99.00
            </h2>
            <p>
              Explore our Furniture & Home <br /> Furnishing Range
            </p>
          </div>
          <div className=" discount-img"></div>
        </div>
        <div className="discount-card-container">
          <div className=" discount-details">
            <h3>Save</h3>
            <h2>
              <sup>$</sup>99.00
            </h2>
            <p>
              Explore our Furniture & Home <br /> Furnishing Range
            </p>
          </div>
          <div className=" discount-img"></div>
        </div>
        <div className="discount-card-container">
          <div className=" discount-details">
            <h3>Save</h3>
            <h2>
              <sup>$</sup>99.00
            </h2>
            <p>
              Explore our Furniture & Home <br /> Furnishing Range
            </p>
          </div>
          <div className=" discount-img"></div>
        </div>
        <div className="discount-card-container">
          <div className=" discount-details">
            <h3>Save</h3>
            <h2>
              <sup>$</sup>99.00
            </h2>
            <p>
              Explore our Furniture & Home <br /> Furnishing Range
            </p>
          </div>
          <div className=" discount-img"></div>
        </div>
        <div className="discount-card-container">
          <div className=" discount-details">
            <h3>Save</h3>
            <h2>
              <sup>$</sup>99.00
            </h2>
            <p>
              Explore our Furniture & Home <br /> Furnishing Range
            </p>
          </div>
          <div className=" discount-img"></div>
        </div>
      </div>
    </div>
  );
};
const WeeklyBestDeals = () => {
  return (
    <div className="weekly-deals">
      <div className="weekly-deals-container-heading ">
        <h1>Weekly best deals for you</h1>
      </div>
      <div className="weekly-deals-main-container">
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals-card-container">
          <div className="weekly-item-img">
            <div className="weekly-wishlist">
              <FontAwesomeIcon className="weekly-heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="weekly-item-description">
            <div className="weekly-item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
            </div>
            <div className="weekly-item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="weekly-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="weekly-rating-text">(121)</span>
              </div>
              <div className="weekly-card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CashBacks = () => {
  return (
    <div className="CashBacks">
      <div className="main-cashback-container">
        <div className="card-of-cashbacks">
          <h1>
            Get 5% Cash <br /> Back on $200
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            doloremque consequatur quos totam ipsam fugit laborum eligendi harum
            modi maxime?
          </p>
          <button type="button">Learn more</button>
        </div>
      </div>
    </div>
  );
};
function Home() {
  return (
    <div className="main-container-homepage">
      <HomePage></HomePage>
      <Catagory></Catagory>
      <Deals></Deals>
      <Brands></Brands>
      <Discounts></Discounts>
      <WeeklyBestDeals></WeeklyBestDeals>
      <CashBacks></CashBacks>
    </div>
  );
}

export default Home;
