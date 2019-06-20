import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
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

const Field = ({selectedItem, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <SpanText>{selectedItem[field]}</SpanText>
        </ListGroupItem>
    )
}



export default class ItemDetails extends Component {

    constructor () {
        super();

        this.state = {
            selectedItem: null,
            onload: false,
            error: false
        };

        this.updateItem = () => {
            const {itemId, getData} = this.props;
            this.setState({onload: true});
            if (!itemId) {
                return;
            } else {
                getData(itemId)
                    .then((item) => {
                        this.setState({selectedItem: item, onload: false})
                    })
            }
        };

        this.componentDidUpdate = (prevProps) => {
            if (this.props.itemId !== prevProps.itemId) {
                this.updateItem();
            }
        }   

        this.componentDidCatch = () => {
            this.setState({error: true});
        }
    }

    render() {
        const {selectedItem, onload, error} = this.state;
        const {label} = this.props;
        console.log(selectedItem);

        if (error) {
            return <Error />
        }

        if (onload) {
            return <Spinner />
        } else if (!selectedItem) {
            return (
                <SelectError>{`Please, select ${label}`}</SelectError>
            )
        } 

        const {name} = selectedItem;

        return (
            <CharDetailsDiv className="char-details rounded">
                <CharDetailsTitle>{name}</CharDetailsTitle>
                <ListGroup className="list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {selectedItem})
                        })
                    }
                </ListGroup>
            </CharDetailsDiv>
        );
    }
}

export {Field};