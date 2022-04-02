import React from "react";

const Picto = ({ src, ...props }) => {
  const config = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return <div style={config} {...props}></div>;
};

export default Picto;
