import React from 'react';
import './PostAddForm.css';
import { Form , Input, Button} from 'reactstrap';

export default class PostAddForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.onAdd = (e) => {
            e.preventDefault();
            const {text} = this.state;
            if (text) {
                this.props.onAdd(text);
                this.setState({text: ''});
            }
            
        }

        this.onChange = (e) => {
            this.setState({text: e.target.value})
        }
    }

    render() {

        return (
            <Form className = "bottom-panel d-flex"
                    onSubmit={this.onAdd}>
                <Input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="new-post-label"
                    onChange={this.onChange} 
                    value={this.state.text} />
                <Button
                        outline
                        type="submit"
                        color="secondary"
                        >
                        Добавить</Button>
            </Form>
        )
    }
    
}