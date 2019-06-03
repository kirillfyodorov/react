import React from 'react';
import './PostList.css';
import PostListItem from '../PostListItem/PostListItem';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            < PostListItem />
            < PostListItem / >
            < PostListItem / >
        </ul>
    )
}

export default PostList;