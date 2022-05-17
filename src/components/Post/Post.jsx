import "./post.css";
import { NewPost, PostCard,ReplyCard } from "components";

export const Post = () => {
  return (
    <div className="post-container">
      <NewPost />
      <div className="post-tag">
        <h3>Latest Posts</h3>
      </div>
      <div className="posts-container flex">
        <PostCard />
        <ReplyCard/>
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
