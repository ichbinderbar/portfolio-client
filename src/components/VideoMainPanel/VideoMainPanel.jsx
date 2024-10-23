import InfoPanel from "../InfoPanel/InfoPanel";
import CommentsSection from "../CommentsSection/CommentsSection";
import "./VideoMainPanel.scss";

export default function VideoMainPanel({ playingVideo }) {
  return (
    <section className="home-page__video-main-panel">
      <InfoPanel playingVideo={playingVideo} />
      <CommentsSection playingVideo={playingVideo} />
    </section>
  );
}
