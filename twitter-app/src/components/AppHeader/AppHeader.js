import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
    }
        
    h2 {
        font-size: 1.2rem;
        color: grey;
    }

`;

const AppHeader = ({liked, all}) => {

    let regText = '';
    const number = (all + '');

    if (number.length === 1) {
        if (number.slice(-1) === '1') {
            regText = 'запись'
        } else if ((number.slice(-1) > '1') && (number.slice(-1) < '5')) {
            regText = 'записи'
        } else {
            regText = 'записей'
        }
    } else {
        if (number.slice(-1) === '1' && number.slice(-2) === '01') {
            regText = 'запись'
        } else if ((number.slice(-1) > '1') && (number.slice(-1) < '5') && number[number.length-2] === '0') {
            regText = 'записи'
        } else {
            regText = 'записей'
        }
    }
    
    return (
        <Header>
            <h1>Kirill Fyodorov</h1>
            <h2>{all} {regText}, из них понравилось {liked}</h2>
        </Header>
    );
};

export default AppHeader;