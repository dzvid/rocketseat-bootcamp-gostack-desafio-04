import React from 'react';

import authorAvatar from '../resources/img/users/6b41f71b0f835bd8c87070ad1bc9c9e360747fa1.png';

function PostHeader({ author, date }) {
  return (
    <div className="post__header">
      <img src={author.avatar} alt="User" className="post__author-avatar" />
      {/* <img src={author.avatar} alt="User" className="post__author-avatar" /> */}

      <div className="post__details">
        <p className="post__author-name">{author.name}</p>
        <p className="post__date">{date}</p>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post__comments">
      {comments.map(comment => (
        <PostComment
          key={comment.id}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </div>
  );
}

function PostComment({ author, content }) {
  return (
    <div className="post__comment">
      <img src={authorAvatar} alt="User" className="comment__author-avatar" />
      {/* <img src={author.avatar} alt="User" className="comment__author-avatar" /> */}
      <div className="comment">
        <p className="comment__content">
          <span className="comment__author-name">{author.name}</span>
          {content}
        </p>
      </div>
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />

      <div className="post__content">
        <p>{content}</p>
      </div>

      <hr className="post__divider-row" />

      <PostComments comments={comments} />
    </div>
  );
}

export default Post;
