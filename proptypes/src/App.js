import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalCard from "./components/AnimalCards";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
<AnimalCard/>
    </div>
  );
};

export default App;
