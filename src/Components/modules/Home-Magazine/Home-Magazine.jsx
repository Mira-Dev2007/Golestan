import React from "react";
import "./Home-Magazine.css";
import img1 from "../../../assets/images/MagazineData.jfif";

const HomeMagazine = () => {
  const iframeStyle = {
    width: "100%",
    height: "auto",
    padding: "0",
    border: "none",
  };

  const iframeContainerStyle = {
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0",
    border: "none",
  };

  return (
    <div className="HomeMagazine">
      <div className="magazine-description">
        <h1>مجله گلستان</h1>
      </div>
      <div className="MagazineData">
        <div className="MagazineCard">
          <img src={img1} alt="" />
          <div className="MagazineCardData">
            <div className="MagazineCardTitle">
              <h2>چیلا کیله</h2>
            </div>
            <div className="MagazineCardDescription">
              <p>
                احتمالا نم چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق
                العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدا نشدنی از
                فهرست
              </p>
            </div>
            <button className="MagazineCardButton">ادامه مطلب</button>
          </div>
        </div>
        <div className="MagazineCard">
          <img src={img1} alt="" />
          <div className="MagazineCardData">
            <div className="MagazineCardTitle">
              <h2>چیلا کیله</h2>
            </div>
            <div className="MagazineCardDescription">
              <p>
                احتمالا نم چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق
                العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدا نشدنی از
                فهرست
              </p>
            </div>
            <button className="MagazineCardButton">ادامه مطلب</button>
          </div>
        </div>
        <div className="MagazineCard">
          <img src={img1} alt="" />
          <div className="MagazineCardData">
            <div className="MagazineCardTitle">
              <h2>چیلا کیله</h2>
            </div>
            <div className="MagazineCardDescription">
              <p>
                احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق
                العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدا نشدنی از
                فهرست
              </p>
            </div>
            <button className="MagazineCardButton">ادامه مطلب</button>
          </div>
        </div>
      </div>
      <div className="MagazineVideoParent">
        <div className="MagazineVideo">
          <div className="MagazineVideoCard">
            <div style={iframeStyle}>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/p66dygj/vt/frame?titleShow=true"
                allowFullScreen
                style={iframeContainerStyle}
                title="Aparat Video"
              ></iframe>
            </div>
          </div>
          <div className="MagazineVideoData">
            <div className="MagazineVideoTitle">
              <h2>اینستاگرام هاتی نودل</h2>
            </div>
            <div className="MagazineVideoDescription">
              <p>
                نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
                دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
                سالم و كاملی ساخته است.
              </p>
            </div>
            <button className="MagazineVideoButton">ویدیو ها یبیشتر</button>
          </div>
        </div>
        <div className="MagazineVideo">
          <div className="MagazineVideoCard">
            <div style={iframeStyle}>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/p66dygj/vt/frame?titleShow=true"
                allowFullScreen
                style={iframeContainerStyle}
                title="Aparat Video"
              ></iframe>
            </div>
          </div>
          <div className="MagazineVideoData">
            <div className="MagazineVideoTitle">
              <h2>اینستاگرام هاتی نودل</h2>
            </div>
            <div className="MagazineVideoDescription">
              <p>
                نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
                دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
                سالم و كاملی ساخته است.
              </p>
            </div>
            <button className="MagazineVideoButton">ویدیو ها یبیشتر</button>
          </div>
        </div>
        <div className="MagazineVideo">
          <div className="MagazineVideoCard">
            <div style={iframeStyle}>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/p66dygj/vt/frame?titleShow=true"
                allowFullScreen
                style={iframeContainerStyle}
                title="Aparat Video"
              ></iframe>
            </div>
          </div>
          <div className="MagazineVideoData">
            <div className="MagazineVideoTitle">
              <h2>اینستاگرام هاتی نودل</h2>
            </div>
            <div className="MagazineVideoDescription">
              <p>
                نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
                دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
                سالم و كاملی ساخته است.
              </p>
            </div>
            <button className="MagazineVideoButton">ویدیو های بیشتر</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMagazine;
