import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem} from 'reactstrap';
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
            this.setState({item, loading: false})
        }

        this.onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        }

        this.updateItem = () => {
            const id = Math.floor(Math.random() * 140 + 25);
            this.props.getData(id)
                .then(this.onItemLoaded)
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
        console.log(item);
        if (error) {
            return <Error/>
        } else if (loading) {
            return <Spinner/>
        }

        return (
            <>
                {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </>
        )
        
    }
}