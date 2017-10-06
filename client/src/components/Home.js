import React, { Component } from 'react';
import { Header, Container, List, Card } from 'semantic-ui-react';

import axios from 'axios';


class Home extends Component {
  state = { ships: [] }


  componentDidMount() {
    fetch('https://swapi.co/api/starships')
      .then( res => res.json())
      .then( starships => {
        this.setState({ ships: starships.results })
      })
  }

  render() {
    let { ships } = this.state;
    return (
      <div>
          <Card>
          <List>
            { ships.map( s =>
            <List.Item>
              <List.Content>
                <List.Header>{s.name}</List.Header>
                <List.Description>{s.starships_class}</List.Description>
              </List.Content>
            </List.Item>
          )}
          </List>
          </Card>
      </div>
    );
  }
}

export default Home;
