import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

const ListGroupItemText = styled.span`
    cursor: pointer;
`;



export default class ItemList extends Component {

    

    constructor () {
        super();

        this.state = {
            charList : null,
            selectedChar : null,
            error: false
        }

        this.gotService = new GotService();

        this.componentDidMount = () => {
            this.gotService.getAllCharacters()
                .then( (charList) => {
                    this.setState({charList})
                })
        }

        this.onCharSelected = (id) => {
            this.setState({selectedChar: id})
        }

        this.renderItems = (mas) => {
            return mas.map((item, i) => {
                return (
                    <ListGroupItem key={item.id}
                        onClick = {() => this.props.onCharSelected(item.id)}>
                        <ListGroupItemText>{item.name}</ListGroupItemText>
                    </ListGroupItem>
                )
            })
        }
        this.componentDidCatch = () => {
            this.setState({error: true});
        }
    }

    render() {

        const {charList, error} = this.state;
        if (error) {
            return <Error />
        }
        if (!charList) {
            return <Spinner />
        }
        
        const items = this.renderItems(charList);
        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}