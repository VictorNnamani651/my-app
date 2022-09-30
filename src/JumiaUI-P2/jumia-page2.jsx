import React from "react";
import imgPath from "./images/Tcl-top-strip.gif";
import logoPath from "./images/Jumia-Logo.png";
import fourthSectionAD from "./images/Brand-day-slider-live-now.gif";
import Dropdown from "./Components/DropDown";

export default function JumiaPage2() {
  return (
    <div className="main-body">
      <div className="firstSection">
        <img src={imgPath} className="clickable" alt="" />
      </div>

      <div className="secondSection">
        <div className="halfHolder">
          <div className="firstHalf">
            <p>
              <i className="fa fa-star"></i>
            </p>
            <p>Sell On Jumia</p>
          </div>
          <div className="secondHalf">
            <ul className="secondHalf-ul">
              <li>Jumia</li>
              <li>Pay</li>
              <li>Food</li>
              <li>Party</li>
              <li>Prime</li>
              <li>Logistics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="thirdSection">
        <div className="thirdSection-center">
          <div className="logo clickable">
            <img src={logoPath} alt="" />
          </div>
          <div className="searchBarXbtn">
            <input
              type="text"
              placeholder="Search products,brands and categories"
            />
            <button className="clickable">Search</button>
          </div>
          <Dropdown
            classname="account clickable"
            iconClass1="fa fa-user"
            paraClass="tSection"
            iconClass2="fa fa-caret-down"
            buttonName="Account"
          >
            <div className="signIn-btn-holder">
              <button className="signIn">Sign In</button>
            </div>
            <div className="dropdown-options">
              <ul>
                <li>
                  <i className="fa fa-user"></i>
                  <p>My Account</p>
                </li>
                <li>
                  <i className="fa fa-dropbox"></i>
                  <p>Orders</p>
                </li>
                <li>
                  <i className="fa fa-heart-o"></i>
                  <p>Saved Items</p>
                </li>
              </ul>
            </div>
          </Dropdown>

          <Dropdown
            classname="help clickable"
            iconClass1="fa fa-question-circle-o tSection"
            paraClass="tSection"
            iconClass2="fa fa-caret-down"
            buttonName="Help"
          >
            <p>Hello</p>
          </Dropdown>

          <Dropdown
            classname="cart clickable"
            iconClass1="fa fa-cart-plus tSection"
            paraClass="tSection"
            buttonName="Cart"
          />
        </div>
      </div>

      <div className="fourthSection">
        <div className="fourthSectionCenter">
          <div className="categories">1</div>
          <div className="fourthSectionAD">
            <img src={fourthSectionAD} alt="" />
          </div>
          <div className="subAD1">3</div>
          <div className="subAD2">4</div>
        </div>
      </div>
    </div>
  );
}