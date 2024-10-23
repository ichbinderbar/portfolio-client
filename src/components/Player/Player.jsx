import "./Player.scss";

export default function Player({ playingVideo }) {
  const isEmbeddedVideo = playingVideo.video.includes(
    "youtube.com" || "loom.com"
  );
  return (
    <>
      {isEmbeddedVideo ? (
        <iframe
          className="home-page__player"
          src={playingVideo.video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={playingVideo.title}
        ></iframe>
      ) : (
        <video
          className="home-page__player"
          poster={playingVideo.image}
          controls
          src={playingVideo.video}
        ></video>
      )}
    </>
  );
}
