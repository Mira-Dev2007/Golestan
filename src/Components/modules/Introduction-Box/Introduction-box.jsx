import React from 'react'
import image1 from '../../../assets/images/statistics-icon-1.png'
import image2 from '../../../assets/images/statistics-icon-2.png'
import image3 from '../../../assets/images/statistics-icon-3.png'
import image4 from '../../../assets/images/statistics-icon-4.png'
import "./Introduction-box.css"
const Introduction_box = () => {
  return (
    <div className='introduction-box'>
        <div className="statistic-icon">
            <img src={image1} alt="" />
            <div className="caption">
                <p>مشتریان گلستان </p>
            </div>
        </div>
        <div className="statistic-icon">
            <img src={image2} alt="" />
            <div className="caption">
                <p> محصولات گلستان </p>
            </div>
        </div>
        <div className="statistic-icon">
            <img src={image3} alt="" />
            <div className="caption">
                <p> مراکز فروش </p>
            </div>
        </div>
        <div className="statistic-icon">
            <img src={image4} alt="" />
            <div className="caption">
                <p> سرمایه انسانی </p>
            </div>
        </div>
    </div>
  )
}

export default Introduction_box