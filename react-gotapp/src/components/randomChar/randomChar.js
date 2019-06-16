import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import Error from '../error/error'

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const RandomBlockTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {

    constructor () {
        super();

        this.gotService = new GotService();

        this.state = {
            char: {},
            loading: true,
            error: false
        }

        this.onCharLoaded = (char) => {
            this.setState({char, loading: false})
        }

        this.onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        }

        this.updateChar = () => {
            const id = Math.floor(Math.random() * 140 + 25);
            this.gotService.getCharacter(id)
                .then(this.onCharLoaded)
                .catch(this.onError);
        }

        this.updateChar();
    }

    render() {

        const {char, loading, error} = this.state;

        const content = loading ? <Spinner /> : error ? <Error /> : <View char={char} />

        return (
            <RandomBlock>
                {content}
            </RandomBlock>
        );
    }
}

const View = (({char}) => {
    const {name, gender, born, died, culture} = char;
    return(
        <>
        <RandomBlockTitle>Random Character: {name}</RandomBlockTitle>
        <ListGroup className="list-group-flush">
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Gender </Term>
                <span>{gender}</span>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Born </Term>
                <span>{born}</span>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Died </Term>
                <span>{died}</span>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <Term>Culture </Term>
                <span>{culture}</span>
            </ListGroupItem>
        </ListGroup>
        </>
    )
})