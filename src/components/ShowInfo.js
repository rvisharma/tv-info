import React from 'react';

export default class ShowInfo extends React.PureComponent {
  render() {
    const { show } = this.props;
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
