import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "@/redux/slices/characterSlice";

function Characters() {
  const dispatch = useDispatch();

  const { loading, characters, error } = useSelector(
    (state) => state.character
  );
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {characters.map((character) => (
          <li key={character.name}>{character.name} {character.hairColor} {character.eyeColor}</li>
        ))}
      </ul>
    </>
  );
}

export default Characters;
