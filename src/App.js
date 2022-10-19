import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fechCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  const onPrevious = () => {
    fechCharacters(info.prev);
  };

  const onNext = () => {
    fechCharacters(info.next);
  };

  useEffect(() => {
    fechCharacters(url);
  }, []);

  return (
    <>
      <Navbar brand="Rick And Morty App" />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
