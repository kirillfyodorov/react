import React from 'react';

export default class Service extends React.Component {
    constructor() {
        super();

        this._apibase = './db.json';

        this.getResource = async () => {
            const fullUrl = `${this._apibase}`;
            const res = await fetch(fullUrl);
            if (!res.ok) {
                throw new Error(`Could not fetch ${fullUrl}, recived ${res.status}`)
            }
            return await res;
        }

        this.getAllBestsellers =  () => {
            this.getResource()
                .then((res) => {
                    console.log(res.json());
                })
        }
        
        
    }

    render() {
        this.getAllBestsellers();
            return (
                <div>fsafsa</div>
            )   
        }
}

