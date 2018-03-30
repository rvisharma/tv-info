import React, { Component } from 'react';
import SearchBar from './components/SearchBar.jsx';

import './reset.css';
import './App.css';
import SearchResultList from './components/SearchResultList.jsx';

import ShowInfo from './components/ShowInfo';
import { searchShows } from './api';

const Header = () => {
  return (
    <header className="header">
      <h1>TV Series Info</h1>
    </header>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  state = { searchTerm: '', searchResults: [], selectedShow: undefined };

  async handleSearchSubmit(searchTerm) {
    const searchResults = await searchShows(searchTerm);
    console.log(searchResults);
    this.setState({
      searchTerm,
      searchResults: searchResults,
      selectedShow: undefined
    });
  }

  handleSearchItemClick = show => {
    this.setState(
      {
        selectedShow: show
      },
      () => {
        // scroll into view in case of smaller displays only
        if (window.innerWidth <= 768) {
          document.getElementById(show.id).scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    );
  };

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar onSearchSubmit={this.handleSearchSubmit} />
        <div className="results-section">
          <SearchResultList
            onSearchItemClick={this.handleSearchItemClick}
            searchResults={this.state.searchResults}
          />
          <ShowInfo show={this.state.selectedShow} />
        </div>
      </div>
    );
  }
}

export default App;
