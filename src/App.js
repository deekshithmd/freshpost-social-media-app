import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Landing,
  Navigation,
  Footer,
  Login,
  Signup,
  Home,
  Post,
  Explore,
  Bookmark,
  Notification,
  Profile,
  RequiresAuth,
} from "components";
function App() {
  return (
    <div className="App">
      <Navigation className="nav" />
      <div className="body">
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/home" element={<Home />}>
            <Route
              index
              element={
                <RequiresAuth>
                  <Post />
                </RequiresAuth>
              }
            />
            <Route
              path="post"
              element={
                <RequiresAuth>
                  <Post />
                </RequiresAuth>
              }
            />
            <Route
              path="explore"
              element={
                <RequiresAuth>
                  <Explore />
                </RequiresAuth>
              }
            />
            <Route
              path="bookmark"
              element={
                <RequiresAuth>
                  <Bookmark />
                </RequiresAuth>
              }
            />
            <Route
              path="notification"
              element={
                <RequiresAuth>
                  <Notification />
                </RequiresAuth>
              }
            />
            <Route
              path="profile"
              element={
                <RequiresAuth>
                  <Profile />
                </RequiresAuth>
              }
            />
          </Route>
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
