import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage/characterPage';
import BooksPage from '../pages/BooksPage/booksPage';
import HousesPage from '../pages/housesPage/housesPage';
import Error from '../error/error';



export default class App extends React.Component {

    constructor () {
        super();

        this.state = {
            showRandom: true,
            error: false
        }

        this.componentDidCatch = () => {
            this.setState({error: true})
        }

        this.onBtnClick = () => {
            this.setState(({showRandom}) => {
                return {showRandom: !showRandom};
            });
        }

        

    }

    render() {
        const {showRandom, error} = this.state;
        if (error) {
            return <Error />
        }
        const btnContent = showRandom ? 'Hide random character' : 'Show random character';
        const randomContent = showRandom ? <RandomChar /> : null;
        return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <Button  color="secondary hide-btn" onClick={this.onBtnClick}>{btnContent}</Button>
                        {randomContent}
                    </Col>
                </Row>
                < CharacterPage / >
            </Container>
        </>
    );
    }
    
};