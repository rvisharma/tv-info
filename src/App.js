import React, { Component } from 'react';
import SearchBar from './components/SearchBar.jsx';

import './reset.css';
import './App.css';
import SearchResultList from './components/SearchResultList.jsx';

import Header from './components/Header';
import ShowInfo from './components/ShowInfo';
import ShowDetails from './components/ShowDetails';
import { searchShows } from './api';

class App extends Component {
  state = { searchTerm: '', searchResults: [], selectedShow: undefined };

  handleSearchSubmit = async searchTerm => {
    if (searchTerm === this.state.searchTerm) {
      return;
    }

    const searchResults = await searchShows(searchTerm);
    this.setState({
      searchTerm,
      searchResults: searchResults,
      selectedShow: undefined
    });
  };

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
        <ShowDetails show={this.state.selectedShow} />
      </div>
    );
  }
}

export default App;
