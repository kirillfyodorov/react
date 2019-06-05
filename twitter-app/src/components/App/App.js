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
                like: false,
                id: idGenerator()
            })
        };

        this.state = {
            data : [this.createElem('Учу сейчас реакт, крутой фреймворк!'),
                    this.createElem('Это оказалось не так легко'),
                    this.createElem('Скоро доделаю первое приложение')],
            term: '',
            filter: 'all'
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

        this.onToggleProp = (prop, id) => {
            this.setState(({data}) => {
                const res = data.map((elem) => {
                    if (elem.id !== id) {
                        return elem 
                    } else {
                        return {...elem, [prop]: !elem[prop]}
                    }
                })
                return({data: res})
            });
        }

        this.searchPost = (items, term) => {
            if (term.length === 0) {
                return items
            } 

            return items.filter((elem) => {
                return (elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
            })
        }

        this.onUpdSearch = (term) => {
            this.setState({term});
        }

        this.filterPost = (items, filter) => {
            if (filter === 'like') {
                return items.filter((elem) => {
                    return (elem.like);
                })
            } else {
                return items
            }
        }

        this.onFilterSelect = (filter) => {
            this.setState({filter});
        }
    }

    render () {
        const {data, term, filter} = this.state;
        const liked = data.filter((elem) => elem.like).length;

        const visiblePost = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader liked={liked} all={data.length} / >
                <div className="search-panel d-flex">
                    < PostSearchPanel onUpdSearch={this.onUpdSearch}/ >
                    < PostStatusFilter filter={filter}
                    onFilterSelect={this.onFilterSelect} />
                </div>
                < PostList 
                    posts={visiblePost} 
                    onDelete={this.deleteItem}
                    onEdit = {this.editPost} 
                    onToggleImportant = {(id) => {this.onToggleProp('important', id)}}
                    onToggleLike = {(id) => {this.onToggleProp('like', id)}} / >
                < PostAddForm 
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
    
}