import React from 'react';
import './PostListItem.css';
import { Button } from 'reactstrap';
export default class PostListItem extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            important: false,
            like: false,
            label: this.props.label,
            focusState: false
        };

        this.onImportant = () => {
            this.setState(({important}) => {
                return {important: !important}
            });
        };
        this.onLike = () => {
            if (!this.state.focusState) {
                this.setState(({like}) => {
                return {like: !like}
                })
            }
        }
        this.onEdit = () => {
            this.setState({
                focusState: true
            });

            let input = document.querySelector(`.edit-input-${this.props.id}`);
            input.disabled = false;
            input.focus();
            input.value = input.placeholder;
        }

        this.onBlur = () => {
            this.setState({
                    focusState: false
                });

            let input = document.querySelector(`.edit-input-${this.props.id}`);
            input.disabled = true;
            this.props.editPost(input.value);
            this.setState({
                label: input.value
            });
        }
    }
    
    
    render() {
        let classNames = 'app-list-item d-flex justify-content-between';
        const {onDelete,label, id} = this.props;
        const {important, like} = this.state;
        const inputClassName = `edit-input edit-input-${id}`;

        if (important) classNames+=' important'
        if (like)  classNames+=' like'
        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                        onClick={this.onLike}>
                            <input onBlur={this.onBlur} className={inputClassName} disabled placeholder={label} />
                        </span>
                <div className = "d-flex justify-content-center align-items-center" >
                    <button className="btn-edit btn-sm" type="button"
                            onClick={this.onEdit}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn-star btn-sm" type="button"
                            onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" type="button"
                            onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
    
}