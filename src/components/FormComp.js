import React, { useState } from "react";
import ContentSection from "./ContentSection";

const FormComp = () => { 

  let city;
  const[cityName, setCityName] = useState();
  const[weaDesc, setWeaDesc] = useState();
  const[weaIcon, setWeaIcon] = useState();
  const [isSubmit, setSubmit] = useState(false);

  const getCity = () => {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7091913cee61b843c48984df61dedcb`);
    xhr.send();
    xhr.onload = ()=> {
      if (xhr.status === 200) {
          const response = JSON.parse(xhr.response);
          setCityName(response.name);
          setWeaDesc(response.weather[0].description);
          setWeaIcon(response.weather[0].icon);
          setSubmit(true);
      } else {
          alert("Please enter correct city name");
      }
    };
  }
  const getInput = (e) => {
    city = e.target.value;
  }
  const preventSubmit = (e) => {e.preventDefault();getCity();}
 
  return (
    
    <>
      <form  onSubmit={preventSubmit}>
        <input
          type="text"
          placeholder="Enter Your City"
          className="border border-gray-300 py-2 px-6 rounded-lg me-3"
          onBlur={getInput}
        />
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">
            Submit
        </button>
      </form>
      <div className={(isSubmit ? "block" : "hidden")}>
        <ContentSection name={cityName} description={weaDesc} icon={weaIcon}/>
      </div>
    </>
  );
};

export default FormComp;
