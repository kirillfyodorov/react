import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';
import Error from '../../error/error';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock'


export default class BooksPage extends React.Component {
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
                getData = {this.GotService.getAllBooks}
                renderItem={({name}) => `${name}`}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem} getData={this.GotService.getBook}  label='book'>
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )

        return(
            < RowBlock left={itemList} right={itemDetails}/>
        )
        
    }
}

export {Field};