import React, { FC } from "react";

import "./FooterMenu.css";

const FooterMenu: FC = () => {
  return (
    <footer>
      <div className={"footer-center"}>
        <span className="about">{`💻`} Made by Paulo Viana</span>
      </div>
    </footer>
  );
};

export default FooterMenu;
