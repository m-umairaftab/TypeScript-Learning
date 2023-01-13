interface Book {
    author?: string;
    pages: number;
};
// Ok
const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};
const missing: Book = {
    pages: 80
}
interface Book{           // interfaces can be redefined
    author?: string;
    pages: number;
    name?: string;
}