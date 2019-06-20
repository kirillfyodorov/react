import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem, ListGroup} from 'reactstrap';
import Spinner from '../spinner/spinner';
import Error from '../error/error';


const Term = styled.span`
    font-weight: bold;
`;

const RandomBlockTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

const Title = ({item, field, label}) => {
    return (
            <RandomBlockTitle>{`Random ${label}: ${item[field]}`}</RandomBlockTitle>
    )
}

export {Field, Title};

export default class RandomItemDetails extends Component {

    constructor () {
        super();

        this.state = {
            item: {},
            loading: true,
            error: false
        }

        this.onItemLoaded = (item) => {
            this.setState({item, loading: false});
        }

        this.onError = () => {
            this.setState({
                error: true,
                loading: false
            });
        }

        this.updateItem = () => {
            const id = Math.floor(Math.random() * 140 + 25);
            const {getData} = this.props;
            getData(id)
                .then((item) => this.onItemLoaded(item))
                .catch(this.onError);
        }
        

        this.componentDidMount = () => {
            this.updateItem();
            this.timer = setInterval(this.updateItem, 3000);
        };

        this.componentWillUnmount = () => {
            clearInterval(this.timer);
        }
    }

    render() {
        const {item, loading, error} = this.state;
        if (error) {
            return <Error/>
        } else if (loading) {
            return <Spinner/>
        }
        return (
            <>
                <Title field='name' label='character' item={item} />
                <ListGroup className="list-group-flush">
                {
                    
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
                </ListGroup>
            </>
        )
        
    }
}