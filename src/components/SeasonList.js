import React from 'react';

export default class SeasonList extends React.PureComponent {
  onSeasonClick = seasonId => evt => {
    evt.preventDefault();
    this.props.onSeasonClick(seasonId);
  };

  render() {
    const seasons = this.props.seasons;

    return seasons ? (
      <div className="season-list_container">
        <ul className="season-list">
          {seasons.map(season => (
            <li key={season.number} className="season-list_item pill">
              <a href="" onClick={this.onSeasonClick(season.id)}>
                Season {season.number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }
}
