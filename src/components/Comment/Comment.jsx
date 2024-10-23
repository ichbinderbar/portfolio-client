import "./Comment.scss";
export default function Comment({ commentName, commentDate, commentComment }) {
  return (
    <div className="comments-section__comment-container">
      <div className="comments-section__comment-user-dp-container">
        <div className="comments-section__comment-user-dp"></div>
      </div>
      <div className="comments-section__comment-name-date-text-container">
        <div className="comments-section__comment-name-date-container">
          <div className="comments-section__comment-name">{commentName}</div>
          <div className="comments-section__comment-date">{commentDate}</div>
        </div>
        <div className="comments-section__comment-text">{commentComment}</div>
      </div>
    </div>
  );
}
