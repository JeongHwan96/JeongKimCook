import React from "react";

const Header = ({ leftContent, headText, rightContent }) => {
  return (
    <>
      <header>
        <div className="leftContent">{leftContent}</div>
        <div className="headText">{headText}</div>
        <div className="rightContent">{rightContent}</div>
      </header>
    </>
  );
};

export default Header;
