import { useState } from "react";
import { Card } from "react-bootstrap";

const sampleCard = {
  countryName: "Norway",
  description:
    "Norway is a really cool country and I would love to go there and climb and stuf256x192256x192256x192256x192256x192256x192256x192256x12256x192f",
  flag: "https://flagcdn.com/192x144/no.png",
  coin: "crown",
  population: "shit ton of people",
};

function CountryCard(props) {
  return (
    <Card className="m-3 p-2">
      <Card.Img style={{ width: "10rem" }} variant="top" src={props.c.flag} />
      <Card.Body>
        <Card.Title>
          <h1>{props.c.countryName}</h1>
        </Card.Title>
        <Card.Text>{props.c.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

async function handleClick() {
  const res = await fetch("https://www.randomAPI.com");
  console.log(res.json());
}

function LearnPage() {
  const [searchRes, setSearchRes] = useState([sampleCard]);
  const [currentSearchBar, setCurrentSearchBar] = useState("");
  return (
    <div className="col-9 w-fit">
      <h2>Learn</h2>
      <hr />
      <div className="container content-center items-center flex">
        <p>Type a country you would like to learn about: </p>
        <form className="align-middle flex">
          <input
            className="whitespace-pre-line h-4"
            placeholder="Just spell it correctly"
            onChange={(e) => setCurrentSearchBar(e.target.value)}
          />
          <button onClick={handleClick} className="m-3 btn btn-outline-info">
            Search
          </button>
        </form>
        <CountryCard c={sampleCard} />
      </div>
    </div>
  );
}

export default LearnPage;
