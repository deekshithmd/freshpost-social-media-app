import "./post.css";
import { NewPost, PostCard, ReplyCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "app/Slices/postSlice";
import { useEffect } from "react";

export const Post = () => {
  const { allPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getAllPosts());
    })();
  }, []);

  return (
    <div className="post-container">
      <NewPost />
      <div className="post-tag">
        <h3>Latest Posts</h3>
      </div>
      <div className="posts-container flex">
        {
          allPosts?.map(post=>{
            return(
              <PostCard key={post._id} data={post}/>
            )
          })
        }
      </div>
    </div>
  );
};
