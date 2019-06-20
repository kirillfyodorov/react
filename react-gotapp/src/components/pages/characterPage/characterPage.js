import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';
import Error from '../../error/error';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock'


export default class CharacterPage extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedItem: null,
            error: false
        }

        this.componentDidCatch = () => {
            this.setState({error: true})
        }

        this.onItemSelected = (id) => {
            this.setState({selectedItem: id});
        }
        this.GotService = new GotService()
    }

    render() {
        const {error} = this.state;
        if (error) {
            return <Error />
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected} 
                getData = {this.GotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem} getData={this.GotService.getCharacter} label='chraracter'>
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return(
            < RowBlock left={itemList} right={itemDetails}/>
        )
        
    }
}