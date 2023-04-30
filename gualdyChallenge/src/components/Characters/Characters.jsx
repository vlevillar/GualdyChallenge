import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, setFilter } from "@/redux/slices/characterSlice";
import style from "./Characters.module.css";

function Characters(props) {
  const dispatch = useDispatch();
  const { filmId } = props;
  const { loading, characters, error } = useSelector(
    (state) => state.character
  );

  const [selectedEyeColor, setSelectedEyeColor] = useState("");
  const [selectedHairColor, setSelectedHairColor] = useState("");

  useEffect(() => {
    dispatch(fetchCharacters(filmId));
  }, [dispatch, filmId]);

  const handleEyeColorChange = (e) => {
    const eyeColor = e.target.value;
    setSelectedEyeColor(eyeColor);
    dispatch(setFilter({ eyecolor: eyeColor }));
  };

  const handleHairColorChange = (e) => {
    const hairColor = e.target.value;
    setSelectedHairColor(hairColor);
    dispatch(setFilter({ haircolor: hairColor }));
  };

  const filteredCharacters = characters.filter((character) => {
    return (
      (!selectedEyeColor || character.eyeColor === selectedEyeColor) &&
      (!selectedHairColor || character.hairColor === selectedHairColor)
    );
  });

  return (
    <>
    <div className={style.filtersContainer}>
      <h2 className={style.filterName}>Filters</h2>
        <div className={style.filters}> 
          <label htmlFor="eyeColor" className={style.filterLabel}>
            Select eye color:
          </label>
          <br/>
          <select
            id="eyeColor"
            value={selectedEyeColor}
            onChange={handleEyeColorChange}
          >
            <option value="">All</option>
            {characters.map((character, i) => (
              <option key={i} value={character.eyeColor}>
                {character.eyeColor}
              </option>
            ))}
          </select>
        </div>
        <div className={style.filters}>
          <label htmlFor="hairColor" className={style.filterLabel}>Select hair color:</label>
          <select
            id="hairColor"
            value={selectedHairColor}
            onChange={handleHairColorChange}
          >
            <option value="">All</option>
            {characters.map((character, i) => (
              <option key={i} value={character.hairColor}>
                {character.hairColor}
              </option>
            ))}
          </select>
        </div>
        </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {filteredCharacters.map((character) => (
            <div key={character.name} className={style.characterContainer}>
              <h2>{character.name}</h2>
              <p>Eye color: {character.eyeColor}</p>
              <p>Hair color: {character.hairColor}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Characters;
