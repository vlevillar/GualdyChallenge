import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  characters: [],
  error: "",
  filter: {
    eyecolor: "",
    haircolor: "",
  },
};

export const fetchCharacters = createAsyncThunk(
  "film/fetchCharacters",
  async (filmId) => {
    const filmUrl = `https://swapi.dev/api/films/${filmId}/`;
    const filmResponse = await axios.get(filmUrl);
    const filmData = filmResponse.data;
    const characters = filmData.characters;
    const characterPromises = characters.map(async (characterUrl) => {
      const characterResponse = await axios.get(characterUrl);
      const characterData = characterResponse.data;
      return {
        name: characterData.name,
        eyeColor: characterData.eye_color,
        hairColor: characterData.hair_color,
      };
    });
    const characterData = await Promise.all(characterPromises);

    return {
      title: filmData.title,
      director: filmData.director,
      characters: characterData,
    };
  }
);

const characterSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload.characters.filter((character) => {
        return (
          (!state.filter.eyecolor ||
            character.eyeColor === state.filter.eyecolor) &&
          (!state.filter.haircolor ||
            character.hairColor === state.filter.haircolor)
        );
      });
      state.error = "";
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.characters = [];
      state.error = action.error.message;
    });
  },
});

export const { setFilter } = characterSlice.actions;

export default characterSlice.reducer;
