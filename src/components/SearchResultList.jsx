import React from 'react';

class SearchResultItem extends React.PureComponent {
  handleShowTitleClick = evt => {
    evt.preventDefault();
    this.props.onSearchItemClick(this.props.searchItem);
  };

  render() {
    const { searchItem } = this.props;
    return (
      <li className="search-result-list-item">
        <a
          href=""
          onClick={this.handleShowTitleClick}
          className="search-result-title"
        >
          {searchItem.name}
        </a>
      </li>
    );
  }
}

class SearchResultList extends React.PureComponent {
  render() {
    const { searchResults, onSearchItemClick } = this.props;

    return (
      <ul className="search-result-list">
        {searchResults.map(({ show }) => (
          <SearchResultItem
            onSearchItemClick={onSearchItemClick}
            key={show.id}
            searchItem={show}
          />
        ))}
      </ul>
    );
  }
}

export default SearchResultList;
