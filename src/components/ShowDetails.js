import React from 'react';
import { getSeasonsByShowId } from '../api';

import SeasonList from './SeasonList';
import SeasonInfo from './SeasonInfo';

export default class ShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.getSeasonsByShowId = this.getSeasonsByShowId.bind(this);
  }

  state = {
    seasons: undefined,
    selectedSeason: undefined,
    episodes: undefined
  };

  async getSeasonsByShowId(showId) {
    const seasons = await getSeasonsByShowId(showId);
    this.setState({
      seasons: seasons,
      selectedSeason: undefined,
      episodes: undefined
    });
  }

  componentDidMount() {
    const show = this.props.show; // HARDCODED
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

  handleSeasonClick = seasonId => {
    this.setState(state => {
      return {
        selectedSeason: state.seasons.filter(s => s.id === seasonId)[0]
      };
    });
  };

  render() {
    const seasons = this.state.seasons; //this.props.show;

    return seasons ? (
      <div>
        <SeasonList seasons={seasons} onSeasonClick={this.handleSeasonClick} />
        <SeasonInfo season={this.state.selectedSeason} />
      </div>
    ) : null;
  }
}
