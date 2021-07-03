import * as React from "react";
import { useState, useEffect } from "react";
import "./list.css"
import Card from "./card.jsx";
const List = ({ items }) => {
  const [countries, setCountries] = useState(() => {
    const temp = [...items];
    return temp;
  });
  // setCountries(items);
  let newItems = items;
  const handleChange = e => {
    newItems = items.filter(item => {
      return item["country"]
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    console.log(newItems.length)
    setCountries(newItems);
  };

  useEffect(() => {
    console.log("newly rendered and coutries : " + countries.length)
  }, []);

  return (
    <div className="list">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search (Ex. India, USA)"
        onChange={e => handleChange(e)}
      ></input>
      { 
        (countries.length > 0 ? countries : items).map((item, idx) => (
        <Card item={item} key={idx}></Card>
      ))
        
      }
    </div>
  );
};

export default List;
