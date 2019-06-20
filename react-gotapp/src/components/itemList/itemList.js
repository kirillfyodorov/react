import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

const ListGroupItemText = styled.span`
    cursor: pointer;
`;



export default class ItemList extends Component {

    

    constructor () {
        super();

        this.state = {
            itemList : null,
            selectedChar : null,
            error: false
        }

        this.componentDidMount = () => {

            const {getData} = this.props;

            getData()
                .then( (itemList) => {
                    this.setState({itemList})
                })
        }

        this.onItemSelected = (id) => {
            this.setState({selectedChar: id})
        }

        this.renderItems = (mas) => {
            return mas.map((item) => {
                const {id} = item;
                const label = this.props.renderItem(item);
                return (
                    <ListGroupItem key={id}
                        onClick = {() => this.props.onItemSelected(id)}>
                        <ListGroupItemText>{label}</ListGroupItemText>
                    </ListGroupItem>
                )
            })
        }
        this.componentDidCatch = () => {
            this.setState({error: true});
        }
    }

    render() {

        const {itemList, error} = this.state;
        if (error) {
            return <Error />
        }
        if (!itemList) {
            return <Spinner />
        }
        
        const items = this.renderItems(itemList);
        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}