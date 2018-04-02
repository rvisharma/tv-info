import React from 'react';

class SearchBar extends React.PureComponent {
  handleSubmit = evt => {
    evt.preventDefault();
    const searchTerm = this.searchInputNode.value;
    this.props.onSearchSubmit(searchTerm);
  };

  render() {
    return (
      <div className="searchbar-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            defaultValue="game of thrones"
            placeholder="Enter show name"
            ref={node => (this.searchInputNode = node)}
          />
          <i onClick={this.handleSubmit} className="magnifier">
            <img src="magnifier.svg" alt="Clear Search" />
          </i>
        </form>
      </div>
    );
  }
}

export default SearchBar;
