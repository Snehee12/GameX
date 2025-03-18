import React, { useState } from "react";
import "./Post.css";
import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";

export const Post = ({ name, text, description, image }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10); 
  const [comments, setComments] = useState(["Nice post!", "Great content!"]); 
  const [newComment, setNewComment] = useState("");

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="post">
      <h3>{name}</h3>
      <p className="des">{description}</p>
      <p>{text}</p>
      {image && <img src={image} alt="Post" className="post-image" />}

      
      <div className="post-actions">
        <button onClick={toggleLike} className="like-btn">
          {liked ? <FaHeart className="liked" /> : <FaRegHeart />} {likeCount}
        </button>
        <button className="comment-btn">
          <FaComment /> {comments.length}
        </button>
      </div>

      <div className="comments-section">
        {comments.map((comment, index) => (
          <p key={index} className="comment">
            {comment}
          </p>
        ))}

        {/* comment input  */}
        <div className="comment-input">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Post</button>
        </div>
      </div>
    </div>
  );
};
