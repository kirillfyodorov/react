import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import PostSearchPanel from '../PostSearchPanel/PostSearchPanel'
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter'
import PostList from '../PostList/PostList'
import PostAddForm from '../PostAddForm/PostAddForm'


import './App.css';

const App = () => {
    return (
        <div>
            < AppHeader />
            <div className="search-panel d-flex">
                < PostSearchPanel />
                < PostStatusFilter />
            </div>
            < PostList />
            < PostAddForm />
        </div>
    )
}

export default App;