import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CountryCard from "../components/CountryCard";
import CenterSpinner from "../components/CenterSpinner";

const blankCountry = {
  name: {
    common: "",
  },
  flags: {
    svg: "",
  },
  capital: [],
  languages: {},
  currencies: {},
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const fetcher = async (path) => {
  let response = await fetch(path);
  return await response.json();
};

function LearnPage() {
  const [currentSearchBar, setCurrentSearchBar] = useState("");
  const [countryData, setCountryData] = useState(blankCountry);
  const [isLoading, setLoading] = useState(false);

  function handleChange(event) {
    setCurrentSearchBar(event.target.value);
  }
  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    //const res = await fetch(`locahost:3001/getCountryInfo/${currentSearchBar}`);
    try {
      console.log(currentSearchBar.toLowerCase());
      let [descrp, res] = await Promise.all([
        fetcher(
          `https://server-flag.herokuapp.com/getCountryInfo/${capitalize(
            currentSearchBar
          )}`
        ),
        fetcher(
          `https://restcountries.com/v3.1/name/${currentSearchBar.toLowerCase()}`
        ),
      ]);

      setCountryData({ description: descrp, ...res[0] });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Learn</h2>
      <hr />
      <div
        style={{ display: "grid", justifyContent: "center", marginTop: "10px" }}
      >
        <input
          placeholder="Just spell it correctly"
          onChange={handleChange}
          value={currentSearchBar}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <button onClick={handleClick}>Search</button>
        <button
          onClick={(e) => {
            setCountryData(blankCountry);
            setCurrentSearchBar("");
          }}
        >
          Clear
        </button>
      </div>
      {isLoading ? (
        <CenterSpinner />
      ) : countryData == blankCountry ? (
        <Fragment />
      ) : (
        <CountryCard data={countryData} />
      )}
    </div>
  );
}

export default LearnPage;
