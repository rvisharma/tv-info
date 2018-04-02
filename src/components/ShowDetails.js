import React from 'react';
import { getSeasonsByShowId, getEpisodeForSeason } from '../api';

import SeasonList from './SeasonList';
import SeasonInfo from './SeasonInfo';
import EpisodeList from './EpisodeList';

export default class ShowDetails extends React.PureComponent {
  state = {
    seasons: undefined,
    selectedSeason: undefined,
    episodes: undefined
  };

  getSeasonsByShowId = async showId => {
    const seasons = await getSeasonsByShowId(showId);
    this.setState({
      seasons: seasons,
      selectedSeason: undefined,
      episodes: undefined
    });
  };

  componentDidMount() {
    const show = this.props.show;
    show && show.id && this.getSeasonsByShowId(show.id);
  }

  componentWillReceiveProps(nextProps) {
    const { show } = nextProps;
    show
      ? this.getSeasonsByShowId(show.id)
      : this.setState({
          seasons: undefined,
          selectedSeason: undefined,
          episodes: undefined
        });
  }

  getEpisodeForSeason = async seasonId => {
    const episodes = await getEpisodeForSeason(seasonId);
    this.setState({
      episodes
    });
  };

  handleSeasonClick = seasonId => {
    if (this.state.seasonId === seasonId) {
      return;
    }

    this.setState(state => {
      return {
        selectedSeason: state.seasons.filter(s => s.id === seasonId)[0]
      };
    });
    this.getEpisodeForSeason(seasonId);
  };

  render() {
    const seasons = this.state.seasons; //this.props.show;

    return seasons ? (
      <div>
        <SeasonList seasons={seasons} onSeasonClick={this.handleSeasonClick} />
        <SeasonInfo season={this.state.selectedSeason} />
        <EpisodeList episodes={this.state.episodes} />
      </div>
    ) : null;
  }
}
