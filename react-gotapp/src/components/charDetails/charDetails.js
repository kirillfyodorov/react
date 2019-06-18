import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import Error from '../error/error'

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

const SelectError = styled.span `
    color: #fff;
    font-size: 24px;
`;

export default class CharDetails extends Component {

    constructor () {
        super();

        this.state = {
            selectedChar: null,
            onload: false,
            error: false
        };

        this.gotService = new GotService();

        this.updateChar = () => {
            const {charId} = this.props;
            this.setState({onload: true});
            if (!charId) {
                return;
            } else {
                this.gotService.getCharacter(charId)
                    .then((char) => {
                        this.setState({selectedChar: char, onload: false})
                    })
            }
        };

        this.componentDidUpdate = (prevProps) => {
            if (this.props.charId !== prevProps.charId) {
                this.updateChar();
            }
        }   

        this.componentDidCatch = () => {
            this.setState({error: true});
        }
    }

    render() {
        const {selectedChar, onload, error} = this.state;
        console.log(selectedChar);

        if (error) {
            return <Error />
        }

        if (onload) {
            return <Spinner />
        } else if (!selectedChar) {
            return (
                <SelectError>Please, select character</SelectError>
            )
        } 

        const {name, gender, born, died, culture} = selectedChar;

        return (
            <CharDetailsDiv className="char-details rounded">
                <CharDetailsTitle>{name}</CharDetailsTitle>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Gender</Term>
                        <SpanText>{gender}</SpanText>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Born</Term>
                        <SpanText>{born}</SpanText>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Died</Term>
                        <SpanText>{died}</SpanText>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Culture</Term>
                        <SpanText>{culture}</SpanText>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsDiv>
        );
    }
}