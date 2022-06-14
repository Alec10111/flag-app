function CountryCard({ data }) {
  return (
    <div className="customCard">
      <div className="cardTitle" style={{ display: "flex", marginTop: "20px" }}>
        <h1 style={{ marginLeft: "10px", marginRight: "15px" }}>
          {data["name"]["common"]}
        </h1>
        <img
          src={data["flags"]["svg"]}
          width="90"
          height="50"
          alt="Flag not available"
        />
      </div>
      <hr />
      <div className="cardContent">
        <p>{data["description"]}</p>
      </div>

      <hr />
      <div className="cardDetails">
        <ul>
          <li>
            <strong>Capital: </strong>
            {data["capital"][0]}
          </li>
          <li>
            <strong>Currency: </strong>
            {Object.keys(data["currencies"])}
          </li>
          <li>
            <strong>Population: </strong>
            {data["population"]}
          </li>
          <li>
            <strong>Languages: </strong>
            {Object.values(data["languages"])}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
