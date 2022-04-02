import React from "react";
import Home from "./pages/Home";

const App = () => {
  const toMp3 = async () => {
    const res = await electron.sendVideo("test");
    console.log(res);
  };

  return (
    <div className="container">
      <div className="d-flex align-item-center  flex-columns full-height">
        <Home />
      </div>
    </div>
  );
};

export default App;
