import React from "react";
import "./Home.css";
import Home_Lottery from "../../modules/Home-Lottery/Home-Lottery";
import Home_Introduction from "../../modules/Home-Introduction/Home-Introduction";
import Introduction_box from "../../modules/Introduction-Box/Introduction-box";
import Home_product from "../../modules/Home-Product/Home-product";
import FoodBack from "../../modules/Food-back/Food-Back";
import HomeMagazine from "../../modules/Home-Magazine/Home-Magazine";
import HomeResponsibility from "../../modules/Home-Responsibility/HomeResponsibility";
const Home = () => {
  return (
    <div className="Home">
      <Home_Lottery />
      <span className="line">
        <span className="line-child"></span>
      </span>
      <Home_Introduction />
      <Introduction_box />
      <span className="line">
        <span className="line-child"></span>
      </span>
      <Home_product />
      <FoodBack />
      <HomeMagazine />
      <HomeResponsibility />
    </div>
  );
};

export default Home;
