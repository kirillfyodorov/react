import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



export default class App extends React.Component {

    constructor () {
        super();

        this.state = {
            showRandom: true
        }

        this.onBtnClick = () => {
            this.setState(({showRandom}) => {
                return {showRandom: !showRandom};
            });
        }

    }

    render() {
        const {showRandom} = this.state;
        const btnContent = showRandom ? 'Hide random character' : 'Show random character';
        const randomContent = showRandom ? <RandomChar/> : null;
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
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
    }
    
};