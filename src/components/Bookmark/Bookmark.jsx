import { PostCard } from "components";
export const Bookmark = () => {
  return (
    <div className="post-container">
      <div className="post-tag">
        <h3>Your Bookmarks</h3>
      </div>
      <div className="posts-container flex">
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
