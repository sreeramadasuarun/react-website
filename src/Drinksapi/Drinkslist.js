import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const Drinkslist = () => {
  const [drinkdata, setdrinkdata] = useState([]);
  console.log(drinkdata);

  const fetchdrinks = async (url) => {
    const response = await fetch(url);
    const { drinks } = await response.json();
    setdrinkdata(drinks);
  };

  useEffect(() => {
    fetchdrinks(url);
  }, []);

  console.log(drinkdata);

  const { coolid } = useParams([]);

  const Drinkslistdata = drinkdata.find((each) => {
    return each.idDrink === coolid;
  });
  console.log(coolid);
  console.log(Drinkslistdata);

  return (
    <div className="drinklist center">
      <h1>Drinksdetails</h1>
      <br />
      <hr />
      <br />
      <h3>
        strDrink: {Drinkslistdata ? Drinkslistdata.strDrink : "Loading..."}
      </h3>
      <br />
      <h3>
        strCategory:{" "}
        {Drinkslistdata ? Drinkslistdata.strCategory : "Loading..."}
      </h3>
      <br />
      <img
        alt=""
        src={Drinkslistdata ? Drinkslistdata.strDrinkThumb : "Loading..."}
      />
    </div>
  );
};

export default Drinkslist;
