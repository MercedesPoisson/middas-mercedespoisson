
export interface Book {
    id: string,
    title: string,
    author: string,
    year: string,
    genre: string,
    isFavorite: boolean
}

export interface State {
    books: Book[],
    favorite: Book[]
}

export interface Action {
    type: string,
    payload: any
}

export interface newBook {
    title: string,
    author: string,
    year: string,
    genre: string,
}