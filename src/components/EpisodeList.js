import React from 'react';

export default class EpisodeList extends React.PureComponent {
  render() {
    const episodes = (this.props.episodes || []).filter(each =>
      Boolean(each.number)
    );
    return (
      <ul className="episode-list">
        {episodes.map(episode => {
          const imgUrl =
            episode.image &&
            (episode.image.medium || episode.image.medium || '');
          return (
            <li className="episode" key={episode.id}>
              <div className="episode_img">
                <img src={imgUrl} alt={episode.name} />
              </div>
              <div className="episode_detail">
                <div className="episode_datetime">
                  <div className="episode_number">
                    S{episode.season} E{episode.number}
                  </div>
                  <div className="episode_date">{episode.airdate}</div>
                  <div className="episode_time">{episode.airtime}</div>
                </div>
                <div className="episode_title">{episode.name}</div>
                <div className="episode_summary">
                  <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
