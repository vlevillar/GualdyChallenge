import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, setFilter } from "@/redux/slices/characterSlice";
import style from "./Characters.module.css";

function Characters(props) {
  const dispatch = useDispatch();
  const { filmId } = props;
  const eyeColors = [];
  const hairColors = [];
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

  characters.forEach((character) => {
    if (character.eyeColor && !eyeColors.includes(character.eyeColor)) {
      eyeColors.push(character.eyeColor);
    }

    if (character.hairColor && !hairColors.includes(character.hairColor)) {
      hairColors.push(character.hairColor);
    }
  });

  return (
    <>
      <div className={style.filtersContainer}>
        <h2 className={style.filterName}>Filters</h2>
        <div className={style.filters}>
          <label htmlFor="eyeColor" className={style.filterLabel}>
            Select eye color:
          </label>
          <br />
          <select value={selectedEyeColor} onChange={handleEyeColorChange}>
            <option value="">All</option>
            {eyeColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className={style.filters}>
          <label htmlFor="hairColor" className={style.filterLabel}>
            Select hair color:
          </label>
          <select value={selectedHairColor} onChange={handleHairColorChange}>
            <option value="">All</option>
            {hairColors.map((color) => (
              <option key={color} value={color}>
                {color}
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
        <div className={style.characterContainer}>
          {filteredCharacters.map((character) => (
            <div key={character.name} className={style.characters}>
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
