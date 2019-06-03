import React from 'react';
import './PostList.css';
import PostListItem from '../PostListItem/PostListItem';



const PostList = ({posts}) => {

    const elements = posts.map((elem) => {
        if (typeof(elem) === 'object') {
            const {id, ...itemProps} = elem;
        
            return (
                <li key={id} className="list-group-item">
                    < PostListItem 
                    label={itemProps.label}
                    important={itemProps.important} />
                </li>
            )
        }
        
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;