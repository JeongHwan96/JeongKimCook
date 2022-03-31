import React from "react";

const HeaderMenu = ({ FirstMenuText, SecondMenuText }) => {
  return (
    <div className="HeaderMenu">
      <div>{FirstMenuText}</div>
      <div>{SecondMenuText}</div>
    </div>
  );
};

export default HeaderMenu;
