import React from 'react';
import './PostSearchPanel.css';
import styled from 'styled-components';

const SearchInput = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

const PostSearchPanel = () => {
    return (
        <SearchInput
            className="form-control search-input" 
            type="text"
            placeholder="Поиск по запясям" />
    )
}

export default PostSearchPanel;