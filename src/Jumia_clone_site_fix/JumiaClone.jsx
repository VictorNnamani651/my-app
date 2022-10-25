import React, { useState } from "react";
import "./JumiaClone.css";
import firstSectionImage from "./images/Free-delivery-top-strip.gif";
import logoPath from "./images/Jumia-Logo.png";
import Dropdown from "./components/dropdown";

export default function JumiaCloneFix() {
  // mobile view navigation icon/side menu function=========================
  const [initialIcon, updateIcon] = useState("fa fa-navicon");
  const [initialDisplay, updateSideMenu] = useState(
    "side-menu-background-main hide-mv"
  );
  function updateNavicon() {
    if (initialIcon === "fa fa-navicon") {
      updateIcon("fa fa-close");
      updateSideMenu("side-menu-background-main");
    } else {
      updateIcon("fa fa-navicon");
      updateSideMenu("side-menu-background-main hide-mv");
    }
  }
  return (
    <div className="main-body">
      {/* ============FIRST SECTION DESKTOP AND MOBILE VIEW====================================================================================================== */}
      <div className="first-section-dv desktop-view">
        <a href="random">
          <img src={firstSectionImage} alt="" />
        </a>
      </div>
      {/* ==mobile==---------------------=====================------------------ */}
      <div className="first-section-mv mobile-view">
        <div className="fsect1">
          <button onClick={updateNavicon}>
            <i className={initialIcon}></i>
          </button>
          <a href="random">
            <p>JUMIA</p>
            <i className="fa fa-star-half-empty"></i>
          </a>
        </div>
        <div className="fsect2">
          <a href="random" className="account-link">
            <i className="fa fa-user-o"></i>
          </a>
          <a href="random" className="cart-link">
            <i className="fa fa-cart-plus"></i>
          </a>
        </div>
        <div className={initialDisplay}>
          <div className="side-menu-background-sub">
            <div className="side-menu">
              <div className="live-help-mv">
                <a href="random">
                  <button className="live-help-btn-mv">
                    <i className="fa fa-commenting-o wechat-mv"></i>
                    <p>Live Help</p>
                  </button>
                </a>
              </div>
              <div className="my-jumia-account">
                <div className="heading">
                  <a href="random">
                    <p>MY JUMIA ACCOUNT</p>
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
                <div className="my-jumia-account-items">
                  <ul>
                    <li>
                      <a href="random">
                        <i className="fa  fa-cube"></i>
                        <p>Orders</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-commenting-o"></i>
                        <p>Pending Reviews</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-ticket"></i>
                        <p>Voucher</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-heart-o"></i>
                        <p>Saved Items</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="our-categories">
                <div className="heading">
                  <a href="random">
                    <p>OUR CATEGORIES</p>
                    <p className="see-all">see all</p>
                  </a>
                </div>
                <div className="our-categories-items">
                  <ul>
                    <li>
                      <a href="random">
                        <i className="fa fa-opencart"></i>
                        <p>Supermarket</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa  fa-heartbeat"></i>
                        <p>Health & Beauty</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa  fa-home"></i>
                        <p>Home & Office</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-tablet"></i>
                        <p>Phone & Tablets</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-laptop"></i>
                        <p>Computing</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-plug"></i>
                        <p>Electronics</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-female"></i>
                        <p>Women's Fashion</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-male"></i>
                        <p>Men's Fashion</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-child"></i>
                        <p>Baby Products</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-gamepad"></i>
                        <p>Gaming</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-soccer-ball-o"></i>
                        <p>Sporting Goods</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-car"></i>
                        <p>Automobile</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="our-services">
                <div className="heading">
                  <a href="random">
                    <p>OUR SERVICES</p>
                    <p className="see-all">see all</p>
                  </a>
                </div>
                <div className="our-services-items">
                  <ul>
                    <li>
                      <a href="random">
                        <i className="fa fa-star-half-o"></i>
                        <p>Jumia Prime</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-star-half-o"></i>
                        <p>Pay Airtime & Bills</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-star-half-o"></i>
                        <p>Pay Electricity Bills</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-star-half-o"></i>
                        <p>Pay Internet Bills</p>
                      </a>
                    </li>
                    <li>
                      <a href="random">
                        <i className="fa fa-star-half-o"></i>
                        <p>Buy Data</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* =============SECOND SECTION DESKTOP AND MOBILE VIEW===================================================================================================== */}
      <div className="second-section-dv desktop-view">
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
                <i className="fa fa-shield">
                  <p>PAY</p>
                </i>
              </li>
              <li className="food">
                <i className="fa fa-star-half-o">
                  <p>FOOD</p>
                </i>
              </li>
              <li className="party">
                <i className="fa fa-glass">
                  <p>PARTY</p>
                </i>
              </li>
              <li className="prime">
                <i className="fa fa-trophy">
                  <p>PRIME</p>
                </i>
              </li>
              <li className="logistics">
                <i className="fa fa-shopping-bag">
                  <p>LOGISTICS</p>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*==============------------ ==mobile========------= */}

      <div className="second-section-mv mobile-view">
        <div className="search-bar">
          <i className="fa fa-search">
            <input
              type="text"
              placeholder="Search products,brands and categories"
            />
          </i>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ===========================THIRD SECTION DESKTOP AND MOBILE VIEW======================================================================================== */}
      <div className="third-section-dv desktop-view">
        <div className="third-section-center">
          <a href="random" className="logo-link logo clickable">
            <img src={logoPath} alt="" />
          </a>
          <div className="searchBarXbtn">
            <i className="fa fa-search">
              <input
                type="text"
                placeholder="Search products,brands and categories"
              />
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
            classname="help pointer"
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

      {/*==============------------ ==mobile========------= */}

      <div className="third-section-mv mobile-view">
        <p>Free Delivery In Lagos, Ibadan & Abuja</p>
      </div>
    </div>
  );
}
