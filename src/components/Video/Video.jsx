import "./Video.scss";

export default function Video({ video }) {
  return (
    <div className="videos-panel__item-container">
      <img className="videos-panel__img" src={video.image}></img>
      <div className="videos-panel__item-subcontainer">
        <h2 className="videos-panel__video-title">{video.title}</h2>
        <h3 className="videos-panel__channel">{video.channel}</h3>
      </div>
    </div>
  );
}
