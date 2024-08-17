import React from "react";
import "./Header.css";
import Logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <figure>
        <img src={Logo} alt="Golestan Logo" title="Golestan" />
      </figure>
      <div className="burger-parent">
        <input id="burger" type="checkbox" />
        <label htmlFor="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="burger-data">
          <ul>
            <li>
              <input type="radio" id="home" name="burger" defaultChecked />
              <label htmlFor="home">
                <p>صفحه اصلی</p>
              </label>
            </li>
            <li>
              <input type="radio" id="company" name="burger" />
              <label htmlFor="company">
                <p>شرکت گلستان</p>
              </label>
            </li>
            <li>
              <input type="radio" id="product" name="burger" />
              <label htmlFor="product">
                <p>محصولات</p>
              </label>
            </li>
            <li>
              <input type="radio" id="blog" name="burger" />
              <label htmlFor="blog">
                <p>وبلاگ</p>
              </label>
            </li>
            <li>
              <input type="radio" id="lottery" name="burger" />
              <label htmlFor="lottery">
                <p>قرعه کشی</p>
              </label>
            </li>
            <li>
              <input type="radio" id="use" name="burger" />
              <label htmlFor="use">
                <p>استخدام</p>
              </label>
            </li>
            <li>
              <input type="radio" id="call" name="burger" />
              <label htmlFor="call">
                <p>تماس با ما</p>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="td-menu">
        <div className="menu-data">
          <ul>
            <li>
              <input
                type="radio"
                id="home-01"
                name="burger-01"
                defaultChecked
              />
              <label htmlFor="home-01">
                <p>صفحه اصلی</p>
              </label>
            </li>
            <li>
              <input type="radio" id="company-01" name="burger-01" />
              <label htmlFor="company-01">
                <p>شرکت گلستان</p>
              </label>
            </li>
            <li>
              <input type="radio" id="product-01" name="burger-01" />
              <label htmlFor="product-01">
                <p>محصولات</p>
              </label>
            </li>
            <li>
              <input type="radio" id="blog-01" name="burger-01" />
              <label htmlFor="blog-01">
                <p>وبلاگ</p>
              </label>
            </li>
            <li>
              <input type="radio" id="lottery-01" name="burger-01" />
              <label htmlFor="lottery-01">
                <p>قرعه کشی</p>
              </label>
            </li>
            <li>
              <input type="radio" id="use-01" name="burger-01" />
              <label htmlFor="use-01">
                <p>استخدام</p>
              </label>
            </li>
            <li>
              <input type="radio" id="call-01" name="burger-01" />
              <label htmlFor="call-01">
                <p>تماس با ما</p>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
