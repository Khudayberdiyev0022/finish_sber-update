import React from "react";
import style from "./HeaderPictures.module.css";
// import bgGradientHeader from "../../assets/svg/bgGradientHeader.svg";
// import bgFamilyHeader from "../../assets/svg/bgFamilyHeader.svg";
import image from "../../assets/bg.png";

const HeaderPictures = () => {
  return (
    <div
      className={style.bg}
      // style={{ background: `url(${bgGradientHeader})` }}
    >
      <img src={image} alt="rasm" />
      {/* <div
        className={style.bgPicturesRadial}
        style={{ backgroundImage: `url(${bgFamilyHeader})` }}
      ></div> */}
    </div>
  );
};

export default HeaderPictures;
