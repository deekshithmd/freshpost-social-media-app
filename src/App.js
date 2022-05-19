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
            <Route index element={<Post />} />
            <Route path="post" element={<Post />} />
            <Route path="explore" element={<Explore />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="notification" element={<Notification />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
