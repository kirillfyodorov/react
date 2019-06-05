import React from 'react';
import './PostSearchPanel.css';
import styled from 'styled-components';

const SearchInput = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

export default class PostSearchPanel extends React.Component {
    constructor() {
        super();

        this.state = {
            term: ''
        }

        this.onChange = (e) => {
            const term = e.target.value;
            this.setState({
                term
            });
            this.props.onUpdSearch(term);
        };
    }
    render() {
        return (
            <input
                className="form-control search-input" 
                type="text"
                placeholder="Поиск по запясям"
                onChange={this.onChange} />
        )
    }
    
}