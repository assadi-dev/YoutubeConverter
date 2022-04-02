import React from "react";

const Badges = ({ message, ...props }) => {
  return <span {...props}>{message}</span>;
};

export default Badges;
