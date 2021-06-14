class Library {
    constructor() {
        this.bookList = [];
    }
    shelve(book) {
        this.bookList.push(book);
        return this;
    }
    findByTitle(name) {
        for (const item of this.bookList) {
            if (item.title.toLowerCase().includes(name.toLowerCase())) {
                return item;
            }
        }
    }
    list() {
        return this.bookList;
    }
}
class Book {
    constructor(title, authors, edition) {
        this.title = title;
        this.authors = authors;
        this.edition = edition;
    }
}