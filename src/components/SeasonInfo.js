import React from 'react';

export default class SeasonInfo extends React.Component {
  render() {
    const season = this.props.season;
    const imgUrl =
      season &&
      season.image &&
      (season.image.medium || season.image.medium || '');

    return season ? (
      <div className="season-info_container">
        <img
          className="season-info_img"
          src={imgUrl}
          alt={`Season ${season.number} Cover Image`}
        />
        <div className="season-info_summary">
          <div className="season-info_title">Season {season.number}</div>
          <div dangerouslySetInnerHTML={{ __html: season.summary }} />
        </div>
        <div className="season-info_dates">
          <p className="season-info_start">
            {season.premiereDate || 'Not Available'}
          </p>
          <p>to</p>
          <p className="season-info_end">{season.endDate || 'Not Available'}</p>
        </div>
      </div>
    ) : null;
  }
}
