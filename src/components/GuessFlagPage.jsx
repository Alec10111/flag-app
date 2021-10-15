import Oneflag from "./OneFlag";
import { useState } from "react";
import shuffleArray, { continentCodes, countryCntCodes } from "../utils";
import { allCountryCodes } from "../utils";

function GuessFlagPage(props) {
  const pre_dict_countryCnt = new Map(countryCntCodes);

  const dict_countryCnt = Object.fromEntries(pre_dict_countryCnt);

  const filteredCountries = props.gameMode === "WW" ? allCountryCodes : allCountryCodes.filter(x => dict_countryCnt[x[0]] === props.gameMode) ;
  
  const entries = new Map(filteredCountries);
  
  const countryCodes = Object.fromEntries(entries);  

  function makeSample(flag, li) {
    return shuffleArray([
      ...shuffleArray(li.filter((x) => x !== flag)).slice(0, 3),
      flag,
    ]);
  }

  const codes = Object.keys(countryCodes);

  const l = codes.length;
  // const shuffledCodes = shuffleArray(codes);

  var r = Math.floor(Math.random() * l);

  const [currentFlag, setcurrentFlag] = useState(codes[r]);

  const [streak, setStreak] = useState(props.round);

  const [visited, setVisited] = useState([]);

  const [sample, setSample] = useState(makeSample(codes[r], codes));

  function nextIteration(flag) {
    if (streak < l) {
      setVisited((prev) => [...prev, flag]);

      let realCurrent = shuffleArray(
        codes.filter((x) => ![...visited, flag].includes(x))
      )[0];
      setcurrentFlag(realCurrent);
      setSample(makeSample(realCurrent, codes));
    } else {
      alert("You Win");
      newGame();
    }
  }

  function newGame() {
    setStreak(1);
    let curr = shuffleArray(codes)[0];
    setVisited([]);

    setcurrentFlag(curr);

    setTimeout(function () {}, 1000);

    setSample(makeSample(curr, codes));
  }

  function handleClick(event) {
    if (event.target.name === currentFlag) {
      setStreak((prev) => prev + 1);
      nextIteration(event.target.name);
    } else {
      alert("You lose!");
      newGame();
    }
  }

  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <h3>{continentCodes[props.gameMode]}: Round {streak}</h3>
          <hr/>
        </div>
        <div className="row">
          <h4>{countryCodes[currentFlag]}</h4>
        </div>
        <div className="row">
          <Oneflag clicked={handleClick} code={sample[0]} />
          <Oneflag clicked={handleClick} code={sample[1]} />
          <Oneflag clicked={handleClick} code={sample[2]} />
          <Oneflag clicked={handleClick} code={sample[3]} />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default GuessFlagPage;