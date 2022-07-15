import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "app/Slices/postSlice";
import { useEffect } from "react";
export const Bookmark = () => {
  const { bookmarks } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getAllPosts());
    })();
  }, []);

  return (
    <div className="post-container">
      <div className="post-tag">
        <h3>Your Bookmarks</h3>
      </div>
      <div className="posts-container flex">
        {bookmarks?.length > 0 ? (
          bookmarks?.map((post) => {
            return <PostCard key={post._id} data={post} />;
          })
        ) : (
          <h3>No bookmarks</h3>
        )}
      </div>
    </div>
  );
};
