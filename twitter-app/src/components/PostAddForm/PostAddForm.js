import React from 'react';
import './PostAddForm.css';
import { Form , Input, Button} from 'reactstrap';

export default class PostAddForm extends React.Component {

    constructor(props) {
        super(props);

        this.onAdd = (e, text = 'hello') => {
            e.preventDefault();

            this.props.onAdd(text);
        }
    }

    render() {

        return (
            <Form className = "bottom-panel d-flex"
                    onSubmit={this.onAdd}>
                <Input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="new-post-label" />
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