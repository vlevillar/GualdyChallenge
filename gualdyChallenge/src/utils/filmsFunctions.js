export function formatterFilms(films) {
  return films.map((e) => ({
    title: e.title,
    episode: e.episode_id,
    director: e.director,
  }));
}
