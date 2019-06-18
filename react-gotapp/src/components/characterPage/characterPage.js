import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Error from '../error/error';


export default class CharacterPage extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedChar: null,
            error: false
        }

        this.componentDidCatch = () => {
            this.setState({error: true})
        }

        this.onCharSelected = (id) => {
            this.setState({selectedChar: id});
        }
    }

    render() {
        const {error} = this.state;
        if (error) {
            return <Error />
        }
        return(
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        )
        
    }
}