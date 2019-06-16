export default class gotService {
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

        this.getAllCharacters = () => {
            return this.getResource(`/characters?page=5&pageSize=10`)
        }
        this.getCharacter = (id) => {
            return this.getResource(`/characters/${id}`);
        }
        this.getAllHouses = () => {
            return this.getResource(`/houses?page=5&pageSize=10`)
        }
        this.getHouse = (id) => {
            return this.getResource(`/houses/${id}`);
        }
        this.getAllBooks = () => {
            return this.getResource(`/books?page=5&pageSize=10`)
        }
        this.getBook = (id) => {
            return this.getResource(`/books/${id}`);
        }
    }
}