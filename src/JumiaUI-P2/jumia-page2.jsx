import React from "react";
import imgPath from "./images/Tcl-top-strip.gif";
import logoPath from "./images/Jumia-Logo.png";
import fourthSectionAD from "./images/Brand-day-slider-live-now.gif";
import MiniAD from "./images/Top-PickUp.gif";
import MiniAD2 from "./images/fourth-sect-mini-ad.jpg"
import Dropdown from "./Components/DropDown";

export default function JumiaPage2() {
  return (
    <div className="main-body">
      <div className="firstSection">
        <img src={imgPath} className="clickable" alt=""/>
      </div>

      <div className="secondSection">
        <div className="halfHolder">
          <div className="firstHalf">
              <i className="fa fa-star-half-o fa_star">
                 <p className="star-text">Sell On Jumia</p>
              </i>
          </div>
          <div className="secondHalf">
            <ul className="secondHalf-ul">
              <li className="secondHalf-logo">
                Jumia
                <i className="fa fa-star-half-o fa_star"></i>
              </li>
              <li className="pay">
                <i className="fa fa-shield"><p>PAY</p></i>
                </li>
              <li className="food">
              <i className="fa fa-star-half-o"><p>FOOD</p></i>
              </li>
              <li className="party">
              <i className="fa fa-glass"><p>PARTY</p></i>
              </li>
              <li className="prime">
              <i className="fa fa-trophy"><p>PRIME</p></i>
              </li>
              <li className="logistics">
              <i className="fa fa-shopping-bag"><p>LOGISTICS</p></i>
              </li>
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
            <i className="fa fa-search">
            <input type="text" placeholder="Search products,brands and categories"/>
            </i>
            <button className="clickable">Search</button>
          </div>
          <Dropdown
            classname="account pointer"
            iconClass1="fa fa-user-o icon-g"
            iconClass2="fa fa-caret-down icon-g"
            buttonName="Account"
          >
            <div className="signIn-btn-holder">
              <button className="signIn">SIGN IN</button>
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
            classname="help"
            iconClass1="fa fa-question-circle-o icon-g"
            iconClass2="fa fa-caret-down icon-g"
            buttonName="Help"
          >
            <ul className="help-options">
              <li>Help Center</li>
              <li>Place & Track Order</li>
              <li>Order cancellation</li>
              <li>Return & Refunds</li>
              <li>Payment & Jumia accounts</li>
            </ul>
            <div className="help-options-btn-holder">
              <button className="live-chat">
              <i className="fa fa-wechat"></i>
                <p>LIVE CHAT</p>
                </button>
            </div>
          </Dropdown>

          <Dropdown
            classname="cart pointer"
            iconClass1="fa fa-cart-plus icon-g"
            buttonName="Cart"
          />
        </div>
      </div>
      <div className="fourth-section">
        <div className="fourth-section-center">
          <div className="div1">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
            </ul>
          </div>
          <div className="div2">
            <img src={fourthSectionAD} alt="" />
          </div>
          <div className="div3">
            <img src={MiniAD} alt="" />
          </div>
          <div className="div4">
            <img src={MiniAD2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
