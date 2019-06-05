import React from 'react';
import './PostList.css';
import PostListItem from '../PostListItem/PostListItem';
import { ListGroup , ListGroupItem} from 'reactstrap';



const PostList = ({posts, onDelete, onEdit}) => {

    const elements = posts.map((elem) => {
        if (typeof(elem) === 'object') {
            const {id, ...itemProps} = elem;
        
            return (
                <ListGroupItem key={id} className="list-group-item">
                    < PostListItem 
                    label={itemProps.label}
                    important={itemProps.important} 
                    onDelete={() => onDelete(id)} 
                    editPost={(text) => onEdit(text, id)}
                    id={id} / >
                </ListGroupItem>
            )
        }
        
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;