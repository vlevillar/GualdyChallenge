export function formatterChars(chars) {
  return chars.map((e) => ({
    title: e.title,
    characters: e.characters
  }));
}
