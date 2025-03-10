import React from "react";
import backgroundImage from "../../public/assests/113572-OONC1M-382.jpg";
import "./introduction.scss";
import vector2 from "../../public/assests/Vector2.svg";
import Image from "next/image";
const Introduction = () => {
  return (
    <div
      className="intro"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="Intro-header">
        <ul className="headerList">
          <li className="list">Home</li>
          <li className="list">Contact Us</li>
          <li className="list">Pricing</li>
        </ul>
      </div>
      <div className="home">
        <div className="description">
          <h1>Welcome to task Manger</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div className="imageDescription">
          <Image src={vector2} alt="" height={300} width={300}/>
          {/* <img src={vector1} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
