import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import PostSearchPanel from '../PostSearchPanel/PostSearchPanel'
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter'
import PostList from '../PostList/PostList'
import PostAddForm from '../PostAddForm/PostAddForm'


import './App.css';

const App = () => {

    const data = [123, {label: 'Учу сейчас реакт, крутой фреймворк!', important: true, id: 1},
                {label: 'Это оказалось не так легко', important: false, id: 2},
                {label: 'Скоро доделаю первое приложение', important: false, id: 3}]

    return (
        <div>
            < AppHeader />
            <div className="search-panel d-flex">
                < PostSearchPanel />
                < PostStatusFilter />
            </div>
            < PostList posts={data} />
            < PostAddForm />
        </div>
    )
}

export default App;