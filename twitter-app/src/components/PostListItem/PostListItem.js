import React from 'react';
import './PostListItem.css';

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
            let input = document.querySelector('.edit-input');
            input.disabled = false;
            input.focus();
            input.value = input.placeholder;
        }

        this.onBlur = () => {
            this.setState({
                    focusState: false
                });
            let input = document.querySelector('.edit-input');
            input.disabled = true;
            this.setState({
                label: input.value
            });
            input.value = '';
        }
    }
    
    
    render() {
        let classNames = 'app-list-item d-flex justify-content-between'


        const {important, like, label} = this.state;

        if (important) classNames+=' important'
        if (like)  classNames+=' like'
        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                        onClick={this.onLike}>
                            <input onBlur={this.onBlur} className="edit-input" disabled placeholder={label} />
                        </span>
                <div className = "d-flex justify-content-canter align-items-center" >
                    <button className="btn-edit btn-sm" type="button"
                            onClick={this.onEdit}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn-star btn-sm" type="button"
                            onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" type="button">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
    
}