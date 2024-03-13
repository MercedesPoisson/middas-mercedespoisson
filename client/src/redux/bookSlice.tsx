import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Book, newBook } from "./interfaces";

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

export const createBook = createAsyncThunk(
  "books/createBook",
  async (newBook: newBook) => {
    try {
      const bookData = {
        title: newBook.title,
        author: newBook.author,
        year: newBook.year,
        genre: newBook.genre,
      };

      console.log("datos nuevo libro: ", bookData);
      const response = await axios.post("http://localhost:3001/books", bookData);
      console.log("Libro creado con exito", response.data);

      return response.data;
    } catch (error) {
      console.log("Error al crear el libro: ", error);
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
      })
      .addCase(createBook.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.loading = "created";
        state.books.push(action.payload)
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
