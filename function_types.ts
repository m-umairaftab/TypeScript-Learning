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
author: undefined,
pages: 80
};
console.log(ok);
console.log(missing);

