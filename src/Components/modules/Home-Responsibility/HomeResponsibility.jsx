import React from "react";
import "./HomeResponsibility.css";
import csrimage from "../../../assets/images/csr-pic1.jpg";
const HomeResponsibility = () => {
  return (
    <div className="Responsibility">
      <div className="Responsibility-first">
        <div className="Responsibility-first-child">
          <h2>مسئولیت های اجتماعی گلستان</h2>
          <div>
            <p>
              <span>Golestan</span>Social Responsibility
            </p>
            <h3>Mahdi Hospital</h3>
          </div>
          <img src={csrimage} alt="" />
        </div>
      </div>
      <div className="Responsibility-second">
        <div className="Responsibility-second-child">
          <h3>مسئولیت های اجتماعی گلستان</h3>
          <p>
            كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
            قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر
            از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و
            امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
            گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های
            عام‌المنفعه را در دستوركار خود قرار داده است.
          </p>
          <button>اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  );
};

export default HomeResponsibility;
