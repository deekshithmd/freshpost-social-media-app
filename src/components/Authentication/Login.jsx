import "./authentication.scss";
import { getCredentials, getTestData } from "utils";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../app/Slices/authSlice";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    isLoggedIn ? navigate("/home") : navigate("/");
  }, [isLoggedIn]);

  const testLogin = async () => {
    dispatch(loginUser(getTestData()));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    dispatch(loginUser(getCredentials(username, password)));
  };

  return (
    <div className="form">
      <div className="form-data">
        {error && <h3>Invalid Credentials</h3>}
        <h2 className="margin-b">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input input-labeled outlined margin">
            <label className="label">Enter Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="input input-labeled outlined margin">
            <label className="label">Enter Password</label>
            <input type="password" name="password" placeholder="******" />
          </div>
          <section className="handle">
            <label className="text-md">
              <input type="checkbox" className="margin-r" name="remember" />
              Remember me
            </label>
            <Link
              to="/forgot"
              className="text-md forgot-pwd text-primary margin-l"
            >
              Forgot password?
            </Link>
          </section>
          <input
            type="submit"
            className="btn btn-solid-primary auth-btn margin margiin-l-3-5"
            value="Login"
          />
        </form>
        <button
          className="btn btn-solid-primary auth-btn margin"
          onClick={testLogin}
        >
          Guest Login
        </button>
        <p className="text-lg">
          <Link to="/signup" className=" link-style-none">
            Create New Account?
            <i className="fa fa-angle-right margin-l"></i>
          </Link>
        </p>
      </div>
    </div>
  );
};
