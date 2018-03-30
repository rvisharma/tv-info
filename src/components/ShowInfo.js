import React from 'react';

const sample = {
  id: 22602,
  url: 'http://www.tvmaze.com/shows/22602/hip-hop-tribe-2-game-of-thrones',
  name: 'Hip Hop Tribe 2 : Game of Thrones',
  type: 'Variety',
  language: 'Korean',
  genres: [],
  status: 'Ended',
  runtime: 90,
  premiered: '2016-10-18',
  officialSite: null,
  schedule: {
    time: '',
    days: []
  },
  rating: {
    average: null
  },
  weight: 17,
  network: {
    id: 268,
    name: 'jTBC',
    country: {
      name: 'Korea, Republic of',
      code: 'KR',
      timezone: 'Asia/Seoul'
    }
  },
  webChannel: null,
  externals: {
    tvrage: null,
    thetvdb: null,
    imdb: null
  },
  image: {
    medium:
      'http://static.tvmaze.com/uploads/images/medium_portrait/119/298108.jpg',
    original:
      'http://static.tvmaze.com/uploads/images/original_untouched/119/298108.jpg'
  },
  summary:
    '<p>A hip hop and rap competition program where older generation contestants are teamed up with professional hip hop music producers.</p>',
  updated: 1499187271,
  _links: {
    self: {
      href: 'http://api.tvmaze.com/shows/22602'
    },
    previousepisode: {
      href: 'http://api.tvmaze.com/episodes/1124799'
    }
  }
};

export default class ShowInfo extends React.Component {
  render() {
    const { show } = this.props;
    // const show = sample;
    const imgUrl = (show && show.image && show.image.medium) || '';

    return show ? (
      <div className="show-info_container" id={show.id}>
        <h3 className="show-info_title">{show.name}</h3>
        <div className="show-info">
          <div className="show-info_img">
            <img src={imgUrl} alt={show.name} />
            <div className="show-info_runtime">{show.runtime} mins</div>
          </div>
          <div
            className="show-info_summary"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        </div>
      </div>
    ) : null;
  }
}
