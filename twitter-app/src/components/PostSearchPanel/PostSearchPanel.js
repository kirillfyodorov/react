import React from 'react';
import './PostSearchPanel.css';

const PostSearchPanel = () => {
    return (
        <input 
            className="form-control search-input" 
            type="text"
            placeholder="Поиск по запясям" />
    )
}

export default PostSearchPanel;