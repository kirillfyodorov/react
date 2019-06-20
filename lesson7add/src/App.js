import React from 'react';
import dbService from './services/service';
import styled from 'styled-components';

const Ul = styled.ul`
  display:flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid black;
  border-radius: 2%;
  text-align: center;
  margin: 2%;
  img {
    width: 75%;
  }
  span {
    font-size: 2rem;
    padding: 1rem 0;
  }
`;

export default class App extends React.Component {
  constructor() {
    super();

    this.db = new dbService();
    
    this.state = {
      bestsellers: null,
      coffee: null,
      goods: null
    }
  }

  componentDidMount() {
    this.getData();
  }


  getData(value) {
    let result = []; 
    if (value == 'bestsellers') {
      result = this.db.getBestsellers();
    }
    if (value == 'coffee') {
      result = this.db.getCoffee();
    }
    if (value == 'goods') {
      result = this.db.getGoods();
    }
    return result.map(item => {
      return (
        <ListItem>
          <h2>{item.name}</h2>
          <div>
            <img src={item.url} alt="coffee"></img>
          </div>
          <span>{item.price}</span>
        </ListItem>
      )
    });
  }
  
  render() {
    return (
      <>
        <Ul>
          {this.getData('bestsellers')}
        </Ul>
        <Ul>
          {this.getData('coffee')}
        </Ul>
        <Ul>
          {this.getData('goods')}
        </Ul>
      </>
    )

  }

}
