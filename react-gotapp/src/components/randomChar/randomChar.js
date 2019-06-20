import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup} from 'reactstrap';
import GotService from '../../services/gotService';
import RandomItemDetails, {Field, Title} from '../randomItemDetails/randomItemDetails';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;



export default class RandomChar extends Component {

    constructor () {
        super();

        this.GotService = new GotService();
    }

    render() {
        return (
            <RandomBlock>
                <RandomItemDetails getData={this.GotService.getCharacter}>
                <Title field='name' label='character'/>
                <ListGroup className="list-group-flush">
                    
                        <Field field='gender' label='Gender' />
                        <Field field='born' label='Born' />
                        <Field field='died' label='Died' />
                        <Field field='culture' label='Culture' />
                    
                </ListGroup>
            </RandomItemDetails>
            </RandomBlock>
        );
    }
}