import "./explore.scss";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "app/Slices/postSlice";
import { useEffect } from "react";
export const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="explore-container flex">
      <div className="post-tag">
        <h3>Explore</h3>
      </div>
      <div className="explore-categories flex">
        <span className="category text-center text-md">For You</span>
        <span className="category text-center text-md">Trending</span>
        <span className="category text-center text-md">Technology</span>
        <span className="category text-center text-md">Sports</span>
        <span className="category text-center text-md">News</span>
      </div>
      <div className="explore-body flex">
        {allPosts?.map((post) => (
          <PostCard key={post._id} data={post} />
        ))}
      </div>
    </div>
  );
};
