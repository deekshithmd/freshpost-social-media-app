import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "app/Slices/postSlice";
import { useEffect } from "react";
export const Bookmark = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log("book", currentUser);
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
        {currentUser?.bookmarks?.length > 0 ? (
          currentUser?.bookmarks?.map((post) => {
            return <PostCard key={post._id} data={post} />;
          })
        ) : (
          <h3>No bookmarks</h3>
        )}
      </div>
    </div>
  );
};
