import React from "react";
import Badges from "../Badges";
import mp3Icon from "../../icons/mp3.png";
import Picto from "./Picto";
import removeicon from "../../icons/remove.png";
import downloadIcon from "../../icons/download.gif";

const SuccessCol = ({ titre, link, id }) => {
  const getFile = () => {
    electron.downloadFile(link);
  };
  return (
    <tr>
      <td>
        <Badges message="Success" className="badges badge-success" />
      </td>
      <td className="d-flex justify-content-center align-item-center">
        <Picto src={mp3Icon} className="picto-icon" />
      </td>
      <td>{titre}</td>
      <td className="d-flex justify-content-center align-item-center">
        <a href={link} rel="noopener noreferrer" title={titre}>
          {" "}
          <Picto type="button" src={downloadIcon} className="action-icon" />
        </a>
        <a href="#" title="Retirer">
          <Picto src={removeicon} className="action-icon" />
        </a>
      </td>
    </tr>
  );
};

export default SuccessCol;
