import React from "react";
import Input from "./components/Input";

const Hello = () => {
  const toMp3 = () => {
    console.log(window.darkMode);
  };

  return (
    <div className="container">
      <div className="d-flex align-item-center justify-content-center flex-columns full-height">
        <p className="text-center title">Entrer le liens youtube</p>
        <Input />

        <button className="btn bg-primary mt" onClick={toMp3}>
          Convertir
        </button>
      </div>
    </div>
  );
};

export default Hello;
