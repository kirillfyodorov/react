import React from 'react';
import './PostStatusFilter.css';


export default class PostStatusFilter extends React.Component {
    
    constructor() {
        super();

        this.state = {

        }

        this.buttons = [
            {name: 'all', label:'Все'},
            {name: 'like', label:'Понравилось'}
        ]
    }

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const btnClass = (name === filter) ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button" key={name} className={`btn ${btnClass}`}
                        onClick = {(() => {onFilterSelect(name)})} >{label}</button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
    
}