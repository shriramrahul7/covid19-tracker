import * as React from "react";
import "./card.css"
const Card = ({ item }) => {
  let country = item['country'];
  let updated_at = item["updated_at"]
  let confirmed = item["latest_data"]["confirmed"]
  let recovered = item["latest_data"]["recovered"]
  let deaths = item["latest_data"]["deaths"]
//   const colors = ["#A7F3D0", "#BFDBFE", "#93C5FD", "#A5B4FC", "#F9A8D4", "#FBCFE8", "#6EE7B7"]
//  let random_color = colors[Math.floor(Math.random() * colors.length)];
  
  
  return (
    <div className="Card" style={{backgroundColor : "#BFDBFE"}}>
      <p className="name">{country.toUpperCase()}</p>
      <div className="upper row">
        <div className="column">
          <p>Updated on : </p>
          <p  className="time stats">{updated_at} </p>
        </div>
        <div className="column">
          <p>Confirmed Cases </p>
          <p  className="confirm stats">{confirmed}</p>
        </div>
      
      </div>
      <div className="lower row">
        <div className="column">
          <p>Recovered : </p>
          <p  className="recovery stats">{recovered}</p>
        </div>
        <div className="column">
          <p>Deaths : </p>
      <p className="death stats">{deaths}</p>
          
        </div>
      
      </div>
    </div>
  );
};

export default Card;
