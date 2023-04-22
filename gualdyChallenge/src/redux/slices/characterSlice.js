import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatterChars } from "@/utils/charFunctions";
import axios from "axios";

const initialState = {
  loading: false,
  characters: [],
  error: "",
};

export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",
  async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    const chars = formatterChars(response.data.results);
    return chars;
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.characters = [];
      state.error = action.error.message;
    });
  },
});

export default characterSlice.reducer
