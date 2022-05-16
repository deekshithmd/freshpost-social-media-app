import "./navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="navigation-bar">
        <section className="brand logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/fR92NM3L/fresh.png"
              className="fresh-logo"
              alt="logo"
            />
          </Link>
          <span className="brand-text">FreshPost</span>
        </section>
      </nav>
    </>
  );
};
