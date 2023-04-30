import React from "react";
import { useParams } from "react-router-dom";
import Characters from "./Characters";

function FilmCharacters() {
  const { filmId } = useParams();

  return <Characters filmId={filmId} />;
}

export default FilmCharacters;
