import React from "react";
import "./Home-Lottery.css";
import lotteryimg from "../../../assets/images/tea-pic1.png";
const Home_Lottery = () => {
  return (
    <div className="Home-Lottery">
      <div className="text-data">
        <h2>قرعه کشی ماهیانه گلستان</h2>
        <h3>قرعه‌کشی ماهیانه مصرف‌ کنندگان چای گلستان</h3>
        <p>
          هر یک از مصرف‌ کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه
          کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال 1403شرکت
          کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
        </p>
        <button>اطلاعات بیشتر</button>
      </div>
      <div className="image-data">
        <img src={lotteryimg} alt="" />
      </div>
    </div>
  );
};

export default Home_Lottery;
