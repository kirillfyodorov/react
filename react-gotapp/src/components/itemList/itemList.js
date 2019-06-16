import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const ListGroupItemText = styled.span`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <ListGroupItemText>John Snow</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                    <ListGroupItemText>Brandon Stark</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                    <ListGroupItemText>Geremy</ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
        );
    }
}