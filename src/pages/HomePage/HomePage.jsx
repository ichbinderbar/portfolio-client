import Player from "../../components/Player/Player";
import VideoMainPanel from "../../components/VideoMainPanel/VideoMainPanel";
import VideosPanel from "../../components/VideosPanel/VideosPanel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.scss";

const apiKey = import.meta.env.VITE_API_KEY;
const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export default function HomePage() {
  const [videos, setVideos] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    getVideo();
  }, [id, videos]);

  const getVideos = async () => {
    try {
      const allVideos = await axios.get(`${baseApiUrl}videos?apiKey=${apiKey}`);
      setVideos(allVideos.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getVideo = async () => {
    if (id) {
      try {
        const newVideo = await axios.get(
          `${baseApiUrl}videos/${id}?apiKey=${apiKey}`
        );
        setPlayingVideo(newVideo.data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("No video ID to include in request. Fetching first video.");
      try {
        const newVideo = await axios.get(
          `${baseApiUrl}videos/${videos[0].id}?apiKey=${apiKey}`
        );
        setPlayingVideo(newVideo.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  if (!playingVideo) {
    return <div className="notification">Loading...</div>;
  }

  return (
    <main>
      <Player playingVideo={playingVideo} />
      <section className="home-page__container">
        <VideoMainPanel playingVideo={playingVideo} />
        <VideosPanel videos={videos} playingVideo={playingVideo} />
      </section>
    </main>
  );
}
