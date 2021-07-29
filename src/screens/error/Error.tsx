import React, { FC } from "react";

import errorImage from "../../assets/svg/robot_error.svg";

import "antd/dist/antd.css";
import "./Error.css";

/**
 * Exibido em caso de erro
 */
export const Error: FC = () => {
  return (
    <div className="error">
      <img src={errorImage} alt="Logo" />
      Ocorreu um erro. Tente novamente mais tarde.
    </div>
  );
};
