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

function CountryCard(props) {
  return (
    <Card className="m-3 p-2">
      <Card.Img
        style={{ width: "10rem" }}
        variant="top"
        src={props.info.flags.png}
      />
      <Card.Body>
        <Card.Title>
          <h1>{props.info.name.common}</h1>
        </Card.Title>
        <Card.Text>{props.descr}</Card.Text>
      </Card.Body>
    </Card>
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
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${currentSearchBar.toLowerCase()}`
      );
      const infoRes = await res.json();

      setCountryData(infoRes[0]);
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
      {isLoading || countryData == blankCountry ? (
        ""
      ) : (
        <Fragment>
          <h1>{countryData["name"]["common"]}</h1>
          <ul>
            <li>Capital: {countryData["capital"][0]}</li>
            <li>Currency: {JSON.stringify(countryData["currencies"])}</li>
            <li>Languages: {JSON.stringify(countryData["languages"])}</li>
          </ul>
        </Fragment>
      )}
    </div>
  );
}

export default LearnPage;
