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
      {/* <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Ramiro Soares Gache</h2>
            <h4>Developer and Designer UX/UI</h4>
            <a
              href="/characters/"
              className={style.linkLkdn}
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/ramisoaresgache/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/"
              className={style.linkPortfolio}
              target="_blank"
            >
              Portfolio
            </a>
          </div>
          <img src="./img/ep1.jpg" alt="image not found" className={style.img} />
        </div>
    </div> */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {films.map((film) => (
          <li key={film.title}>
            Title: {film.title} Episode: {film.episode} Director:
            {film.director}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Films;
