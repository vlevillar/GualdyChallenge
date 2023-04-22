import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatterFilms } from "@/utils/filmsFunctions";
import axios from "axios";

const initialState = {
  loading: false,
  films: [],
  error: "",
};

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await axios.get("https://swapi.dev/api/films");
  const films = formatterFilms(response.data.results);
  return films;
});

const filmSlice = createSlice({
  name: "films",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.loading = false;
      state.films = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.loading = false;
      state.films = [];
      state.error = action.error.message;
    });
  },
});

export default filmSlice.reducer;
