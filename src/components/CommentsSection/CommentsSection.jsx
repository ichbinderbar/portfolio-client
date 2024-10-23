import CommentButton from "../CommentButton/CommentButton";
import Comment from "../Comment/Comment";
import "./CommentsSection.scss";

export default function CommentsSection({ playingVideo }) {
  return (
    <>
      <div className="comments-section">
        {/* <div className="comments-section__new-comment-container">
          <div className="comments-section__new-comment-user-dp-container">
            <div className="comments-section__display-picture"></div>
          </div>
          <form
            className="comments-section__new-comment-input-container"
            id="comment-form"
          >
            <div className="comments-section__comment-subsection-container">
              <label className="comments-section__tag" htmlFor="comment-input">
                Join the conversation
              </label>
              <textarea
                id="comment-input"
                name="comment"
                className="comments-section__input-field"
                type="text"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <CommentButton text="Comment" />
          </form>
        </div> */}
        <div
          id="main-container"
          className="comments-section__main-comment-container"
        ></div>
      </div>
      {playingVideo.comments.map((comment) => (
        <Comment
          key={comment.id}
          commentName={comment.name}
          commentDate={new Date(comment.timestamp).toLocaleDateString()}
          commentComment={comment.comment}
        />
      ))}
    </>
  );
}
