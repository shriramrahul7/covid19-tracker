import * as React from "react";
import List from "../components/list.jsx";
import { useState, useEffect } from "react";
import "./home.css"
import useFetch from "../components/useFetch.js";

export default function Home() {
  const hello = "Covid19-TRACKER!";

  const { data, isLoading, error } = useFetch(
    "https://corona-api.com/countries"
  );
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      let countries = data["data"];
      let result = [];
      countries.forEach(data => {
        let date = new Date(data["updated_at"]);
        let resultObj = {
          country: data.name,
          updated_at: date.toDateString(),
          today: data["today"],
          latest_data: data["latest_data"]
        };
        result.push(resultObj);
      });
      setItems(result);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <h1 className="title">{hello}</h1>
      {error && <p>error</p>}
      {isLoading && "Loading........."}
      {items && <List items={items}></List>}
    </div>
  );
}
