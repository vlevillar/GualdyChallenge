import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "@/redux/slices/filmsSlice";
import style from "./Films.module.css";

function Films() {
  const dispatch = useDispatch();

  const { loading, films, error } = useSelector((state) => state.film);
  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className={style.filmContainer}>
        <h2>Chek out the last films and characters from star wars!</h2>
        {films.map((film) => (
          <div key={film.title} className={style.films}>
            <h2>{film.title}</h2>
            <p>Episode: {film.episode}</p>
            <p>Director: {film.director}</p>
            <button
              onClick={() => {
                window.location.href = `http://localhost:5173/films/${film.episode}`;
              }}
              className={style.btn}
            >
              Go to {film.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Films;
