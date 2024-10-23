import "./VideosPanel.scss";
import "../Video/Video";
import Video from "../Video/Video";
import { Link } from "react-router-dom";

export default function VideosPanel({ videos, handlePlayVideo, playingVideo }) {
  const nextVideos = videos.filter((video) => video.id !== playingVideo.id);
  return (
    <section className="videos-panel">
      <h2 className="videos-panel__main-title">More Videos</h2>
      {nextVideos.map((video) => (
        <Link key={video.id} to={`/videos/${video.id}`}>
          <Video
            id={video.id}
            video={video}
            handlePlayVideo={handlePlayVideo}
          />
        </Link>
      ))}
    </section>
  );
}
