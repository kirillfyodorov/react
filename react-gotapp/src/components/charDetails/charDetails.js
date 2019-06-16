import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';

const CharDetailsDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const CharDetailsTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Term = styled.span`
    font-weight: bold;
`;

const SpanText = styled.span``;

export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsDiv className="char-details rounded">
                <CharDetailsTitle>John Snow</CharDetailsTitle>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Gender</Term>
                        <SpanText>male</SpanText>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Born</Term>
                        <SpanText>1783</SpanText>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Died</Term>
                        <SpanText>1820</SpanText>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Culture</Term>
                        <SpanText>First</SpanText>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsDiv>
        );
    }
}