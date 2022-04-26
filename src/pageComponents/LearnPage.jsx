import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const blankCountry = {
  name: {
    common: "",
  },
  capital: [],
  languages: {},
  currencies: {},
};

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
const fetcher = async(path) => {
  let response = await fetch(path);
  return await response.json()
}

function CountryCard({data}) {
  return (
    <div className="customCard">
      <div className="cardTitle">
        <h1>{data["name"]["common"]}</h1>
        <img
         src={data["flags"]["svg"]}
         width="100"
         height="50"
         alt="South Africa"/>
      </div>
      <hr className="ruler"/>
      <div className="cardContent">
        <p>{data["description"]}</p>
      </div>

      <hr className="ruler"/>
      <div className="cardDetails">
        <ul>
          <li><strong>Capital: </strong>{data["capital"][0]}</li>
          <li><strong>Currency: </strong>{Object.keys(data["currencies"])}</li>
          <li><strong>Population: </strong>{data["population"]}</li>
          <li><strong>Languages: </strong>{Object.values(data["languages"])}</li>
        </ul>
      </div>
    </div>
  );
}

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
      let [descrp,res] = await Promise.all([fetcher(`http://localhost:3001/getCountryInfo/${capitalize(currentSearchBar)}`), fetcher(`https://restcountries.com/v3.1/name/${currentSearchBar.toLowerCase()}`)])

      setCountryData({description: descrp,...res[0]});
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="col-9 w-fit">
      <h2>Learn</h2>
      <hr />
      <div className="container content-center items-center flex">
        <form className="align-middle flex" onSubmit={handleClick}>
          <input
            className="whitespace-pre-line h-4"
            placeholder="Just spell it correctly"
            onChange={handleChange}
          />
          <button className="m-3 btn btn-outline-info">Search</button>
        </form>
        <button
          onClick={(e) => {
            setCountryData(blankCountry);
          }}
          className="m-3 btn btn-outline-info"
        >
          Clear
        </button>
      </div>
      {isLoading || countryData === blankCountry ? (
        ""
      ) : (
        <Fragment>
        <CountryCard data={countryData}/>
        </Fragment>
      )}
    </div>
  );
}

export default LearnPage;