import React from "react";
import Badges from "../Badges";
import Picto from "./Picto";
import alertImage from "../../icons/exclamation-mark.png";
import removeicon from "../../icons/remove.png";

const ErrorCol = ({ colspan, message }) => {
  return (
    <tr>
      <td>
        <Badges message={"Fail"} className="badges badge-danger" />
      </td>
      <td>
        <Picto src={alertImage} />
      </td>
      <td colSpan={colspan}>
        <span>{message}</span>
      </td>
      <td className="d-flex justify-content-center align-item-center">
        <a href="#" title="remove">
          <Picto src={removeicon} className="action-icon" />
        </a>
      </td>
    </tr>
  );
};

export default ErrorCol;
