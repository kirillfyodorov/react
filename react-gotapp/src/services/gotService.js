export default class GotService {
    constructor() {
        this._apibase = 'https://www.anapioficeandfire.com/api';

        this.getResource = async (url) => {
            const fullUrl = `${this._apibase}${url}`;
            const res = await fetch(fullUrl);
            if (!res.ok) {
                throw new Error(`Could not fetch ${fullUrl}, recived ${res.status}`)
            }
            return await res.json();
        }

        this.getAllCharacters = async () => {
            const res = await this.getResource(`/characters?page=5&pageSize=10`);
            return res.map((item) => {
                return {
                    ...this._transformChar(item),
                    id: +item.url.slice(item.url.lastIndexOf('/') + 1, item.url.length)
                }
            });
        }
        this.getCharacter = async (id) => {
            const res = await this.getResource(`/characters/${id}`);
            return {...this._transformChar(res), id};
        }
        this.getAllHouses = async () => {
            const res = await this.getResource(`/houses/`);
            return res.map((item) => {
                return {
                    ...this._transformHous(item),
                    id: +item.url.slice(item.url.lastIndexOf('/') + 1, item.url.length)
                }
            });
        }
        this.getHouse = async (id) => {
            const res = await this.getResource(`/houses/${id}`);
            return {...this._transformHous(res), id};
        }
        this.getAllBooks = async () => {
            const res = await this.getResource(`/books/`);
            return res.map((item) => {
                return {
                    ...this._transformBook(item),
                    id: +item.url.slice(item.url.lastIndexOf('/') + 1, item.url.length)
                }
            });
        }
        this.getBook = async (id) => {
            const res = await this.getResource(`/books/${id}`);
            return {...this._transformBook(res), id};
        }
        this._unknownTr = (elem) => {
            if (elem) {
                return elem
            } else {
                return 'unknown'
            }
        }
        this._transformChar = (char) => {
            return {
                name: this._unknownTr(char.name),
                gender: this._unknownTr(char.gender),
                born: this._unknownTr(char.born),
                died: this._unknownTr(char.died),
                culture: this._unknownTr(char.culture)
            }
        }

        this._transformHous = (hous) => {
            return {
                name: this._unknownTr(hous.name),
                region: this._unknownTr(hous.region),
                worlds: this._unknownTr(hous.worlds),
                titles: this._unknownTr(hous.titles),
                overlord: this._unknownTr(hous.overlord),
                ancestralWeapons: this._unknownTr(hous.ancestralWeapons)
            }
        }

        this._transformBook = (book) => {
            return {
                name: this._unknownTr(book.name),
                numberOfPages: this._unknownTr(book.numberOfPages),
                publisher: this._unknownTr(book.publisher),
                released: this._unknownTr(book.released)
            }
        }
    }
}