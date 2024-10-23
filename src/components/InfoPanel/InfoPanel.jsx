import "./InfoPanel.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

export default function InfoPanel({ playingVideo }) {
  const createDescriptionWithLinks = (description) => {
    const urlPattern =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return description.replace(urlPattern, (url) => {
      return `<a class="info-panel__comment-url" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
  };

  return (
    <section className="info-panel">
      <h1 className="info-panel__title">{playingVideo.title}</h1>
      <div className="info-panel__top-container">
        <div className="info-panel__author-date-container">
          <h2 className="info-panel__author">By {playingVideo.channel}</h2>
          <div className="info-panel__date">
            {new Date(playingVideo.timestamp).toLocaleDateString()}
          </div>
        </div>
        <div className="info-panel__views-likes-container">
          <div className="info-panel__views">
            <img className="info-panel__icon" src={viewsIcon}></img>
            {playingVideo.views}
          </div>
          <div className="info-panel__likes">
            <img className="info-panel__icon" src={likesIcon}></img>
            {playingVideo.likes}
          </div>
        </div>
      </div>
      <p
        className="info-panel__description"
        dangerouslySetInnerHTML={{
          __html: createDescriptionWithLinks(playingVideo.description),
        }}
      ></p>
      <div className="info-panel__comments-counter">
        {playingVideo.comments.length} Comments
      </div>
    </section>
  );
}
