import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import PostSearchPanel from '../PostSearchPanel/PostSearchPanel'
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter'
import PostList from '../PostList/PostList'
import PostAddForm from '../PostAddForm/PostAddForm'


import './App.css';
import styled from 'styled-components';
import idGenerator from 'react-id-generator';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class  App extends React.Component {

    constructor (props) {
        super(props);

        this.createElem = (label, important = false) => {
            return ({
                label,
                important,
                id: idGenerator()
            })
        };

        this.state = {
            data : [this.createElem('Учу сейчас реакт, крутой фреймворк!'),
                    this.createElem('Это оказалось не так легко'),
                    this.createElem('Скоро доделаю первое приложение')]
        };
        

        

        this.deleteItem = (id) => {
            this.setState(({data}) => {
                const res = data.filter((elem) => {
                    return (elem.id !== id)
                });
                return ({data: res})
            });
        }

        this.editPost = (text, id) => {
             this.setState(({data}) => {
                const res = data.map((elem) => {
                    return ((id === elem.id) ? {...elem, label: text} : elem);
                });
                return ({data: res})
            });
        }

        this.addItem = (text) => {
            const newItem = this.createElem(text);
            this.setState(({data}) => {
                return (
                    {data: [...data, newItem]}
                )
            })
        }
    }

    render () {
        const {data} = this.state;
        return (
            <AppBlock>
                < AppHeader />
                <div className="search-panel d-flex">
                    < PostSearchPanel />
                    < PostStatusFilter />
                </div>
                < PostList 
                    posts={data} 
                    onDelete={this.deleteItem}
                    onEdit = {this.editPost} / >
                < PostAddForm 
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
    
}