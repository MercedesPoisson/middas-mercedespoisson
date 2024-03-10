const { Schema, model, models } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es requerido"],
      unique: true,
      trim: true,
    },
    author: {
      type: String,
      required: [true, "El autor es requerido"],
      unique: false,
      trim: true,
    },
    year: {
      type: String,
      required: false,
      unique: false,
    },
    genre: {
      type: String,
      required: [true, "El género es requerido"],
      unique: false,
      trim: true,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book = model("Book", bookSchema);
module.exports = Book;

//module.exports = model("Book", bookSchema);
//module.exports = models.Book || model("Book", bookSchema);
