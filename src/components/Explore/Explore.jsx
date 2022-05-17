import "./explore.css";
import { PostCard } from "components";
export const Explore = () => {
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
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
