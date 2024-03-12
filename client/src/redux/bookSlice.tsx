import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Book  } from "./interfaces";

axios.defaults.baseURL = "http://localhost:3001";

interface BooksState {
  books: Book[];
  loading: string;
  error: any;
}

const initialState: BooksState = {
  books: [],
  loading: "idle",
  error: null,
};

export const fetchAllBooks = createAsyncThunk(
  "books/fetchAllBooks",
  async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      return response.data;
    } catch (error) {
      console.log("Error al obtener los libros", error);
      throw error;
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchAllBooks.fulfilled,
        (state, action: PayloadAction<Book[]>) => {
          state.loading = "succeded";
          state.books = action.payload;
          
        }
      )
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
