import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Book, newBook, Favorite } from "./interfaces";

axios.defaults.baseURL = "http://localhost:3001";

interface BooksState {
  books: Book[];
  loading: string;
  error: any;
  favorites: Favorite[];
}

const initialState: BooksState = {
  books: [],
  loading: "idle",
  error: null,
  favorites: []
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

export const fetchAllFavorites = createAsyncThunk(
  "fav/fetchAllFavorites",
  async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/fav");
      return response.data;
    } catch (error) {
      console.log("Error al obtener los libros favoritos", error);
      throw error;
    }
  }
)

export const toggleFavoriteStatus = createAsyncThunk(
  "fav/toggleFavoriteStatus",
  async (id: string) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/fav/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error al cambiar el estado de favorito: ", error);
      throw error;
    }
  }
)

export const deleteBook = createAsyncThunk(
  "del/deleteBook",
  async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3001/books/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error al eliminar el libro: ", error);
      throw error;      
    }
  }
)

export const updateBook = createAsyncThunk(
  "upd/updateBook",
  async ({ id, fields }: { id: string, fields: Partial<Book> }) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, fields);
      console.log("Libro actualizado con exito: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error al actualizar el libro", error);
      throw error;            
    }
  }
)

export const fetchBookById = createAsyncThunk(
  "book/fetchBookById",
  async (_id: any) => {
    try {
      const response = await axios.get(`http://localhost:3001/books/${_id}`);
      console.log("Libro encontrado", response.data);
      return response.data      
    } catch (error) {
      console.log("Error al buscar el libro", error);
      throw error;            
    }
  }
)

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
        })
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
      })
      .addCase(fetchAllFavorites.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAllFavorites.fulfilled, 
        (state, action: PayloadAction<Favorite[]>) => {
        state.loading = "succeded";
        state.favorites = action.payload
      })
      .addCase(fetchAllFavorites.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(toggleFavoriteStatus.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(toggleFavoriteStatus.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = "succeded";
        const {updatedBook, message} = action.payload;
        const updatedIndex = state.books.findIndex(book => book._id === updatedBook);
        if (updatedIndex !== -1) {
          state.books[updatedIndex] = updatedBook;
          console.log(message);
        }
      })
      .addCase(toggleFavoriteStatus.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = "deleted";
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message
      })
      .addCase(updateBook.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = "updated";
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBookById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchBookById.fulfilled, (state, action: PayloadAction<Book>) => {
        state.loading = "succeded";
        state.books.push(action.payload);
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
  },
});

export default bookSlice.reducer;
