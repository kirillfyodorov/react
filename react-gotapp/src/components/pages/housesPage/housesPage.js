import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';
import Error from '../../error/error';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock'


export default class HousesPage extends React.Component {
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
                getData = {this.GotService.getAllHouses}
                renderItem={({name}) => `${name}`}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem} getData={this.GotService.getHouse}  label='house'>
                <Field field='region' label='Region' />
                <Field field='worlds' label='Worlds' />
                <Field field='titles' label='Titles' />
                <Field field='overlord' label='Overlord' />
                <Field field='ancestralWeapons' label='Ancestral weapons' />
            </ItemDetails>
        )

        return(
            < RowBlock left={itemList} right={itemDetails}/>
        )
        
    }
}

export {Field};