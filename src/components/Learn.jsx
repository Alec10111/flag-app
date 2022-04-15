import { Card } from "react-bootstrap";

const sampleCard = {
  countryName: "Norway",
  description:
    "Norway is a really cool country and I would love to go there and climb and stuf256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192256x192f",
  flag: "https://flagcdn.com/192x144/no.png",
};

function CountryCard(props) {
  return (
    <Card className="m-5 p-5">
      <Card.Img style={{ width: "14rem" }} variant="top" src={props.c.flag} />
      <Card.Body>
        <Card.Title>
          <h1>{props.c.countryName}</h1>
        </Card.Title>
        <Card.Text>{props.c.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Learn() {
  return (
    <div className="col">
      <h2>Learn</h2>
      <hr />
      <p>Type a country you would like to learn about: </p>
      <form>
        <input
          className="whitespace-pre-line"
          placeholder="Just spell it correctly"
        />
        <button>Search</button>
      </form>
      <CountryCard c={sampleCard} />
    </div>
  );
}

export default Learn;
