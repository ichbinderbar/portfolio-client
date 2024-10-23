import "./VideoUploadPage.scss";
import thumbnailImg from "../../assets/images/preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export default function VideoUploadPage() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [uploadComplete, setUploadComplete] = useState(false);
  const navigate = useNavigate();

  const postVideo = async (newVideo) => {
    try {
      await axios.post(`${baseApiUrl}videos?apiKey=${apiKey}`, newVideo);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleFormInput = async (event) => {
    event.preventDefault();
    const newVideo = {
      title,
      description,
      image: "http://localhost:1809/thumbnails/preview.jpg",
      channel: "Ichbinderbar",
    };
    await postVideo(newVideo);
    setUploadComplete(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleLiveInputForDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleLiveInputForTitle = (event) => {
    setTitle(event.target.value);
  };

  function validateForm() {
    return !title || !description;
  }

  if (uploadComplete) {
    return <div className="notification">Upload successful</div>;
  }

  return (
    <form onSubmit={handleFormInput} className="upload-form__main-container">
      <h1 className="upload-form__page-title">Upload Video</h1>

      <div className="upload-form__subcontainer">
        <div className="upload-form__subtitle-thumbnail-img-container">
          <h2 className="upload-form__subtitle">Video Thumbnail</h2>
          <img
            className="upload-form__thumbnail-img"
            src={thumbnailImg}
            alt=""
          />
        </div>

        <div className="upload-form__inputs-main-container">
          <div className="upload-form__inputs-subcontainer">
            <label
              className="upload-form__title-input-container"
              htmlFor="title"
            >
              Title your video
            </label>
            <input
              value={title}
              className="upload-form__title-video-input-container"
              id="title"
              placeholder="Add a title to your video"
              name="title"
              onChange={handleLiveInputForTitle}
            ></input>
          </div>

          <div className="upload-form__inputs-subcontainer">
            <label
              className="upload-form__title-input-container"
              htmlFor="description"
            >
              Add a video description
            </label>
            <textarea
              value={description}
              className="upload-form__description-input-container"
              id="description"
              placeholder="Add a description to your video"
              name="description"
              onChange={handleLiveInputForDescription}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="upload-form__buttons-container">
        <button
          className="upload-form__upload-button"
          disabled={validateForm()}
        >
          Publish
        </button>
        <button className="upload-form__cancel-button">Cancel</button>
      </div>
    </form>
  );
}
