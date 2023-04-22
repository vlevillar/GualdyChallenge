export function formatterChars(chars) {
  return chars.map((e) => ({
    name: e.name,
    eyeColor: e.eye_color,
    hairColor: e.hair_color,
  }));
}
