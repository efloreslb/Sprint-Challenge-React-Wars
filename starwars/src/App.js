import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import PageSelector from './components/PageSelector';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  next = event => {
    if (this.state.next === null) {
      event.preventDefault();
    } else {
      this.getCharacters(this.state.next);
    }
  }

  prev = event => {
    if (this.state.prev === null) {
      event.preventDefault();
    } else {
      this.getCharacters(this.state.prev);
    }
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results, 
          next: data.next, 
          prev: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Container">
          <PageSelector next={this.next} prev={this.prev}/>
          <CharacterList starwarsChars={this.state.starwarsChars} />
          <PageSelector next={this.next} prev={this.prev}/>
        </div>
      </div>
    );
  }
}

export default App;
