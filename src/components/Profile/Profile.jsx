import "./profile.css";
import { PostCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserPost } from "app/Slices/postSlice";
import { getCurrentUser, updateUserData } from "app/Slices/userSlice";
import { logoutUser } from "app/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export const Profile = () => {
  const navigate = useNavigate();
  const { allPosts } = useSelector((state) => state.post);
  const { token } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState();
  // const [profilePicture, setProfilePicture] = useState("");
  // console.log("profile", currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPost({ username: currentUser?.username }));
    // dispatch(getCurrentUser({ userId: currentUser._id }));
  }, []);

  const logout = () => {
    dispatch(logoutUser());
  };

  const update = async (e) => {
    e.preventDefault();
    console.log("called");
    const { firstname, lastname, description, website } = e.target.elements;

    dispatch(
      updateUserData({
        userData: {
          // profileUrl: response.data.url,
          firstName: firstname.value,
          lastName: lastname.value,
          description: description.value,
          website: website.value,
        },
        encodedToken: token,
      })
    );
    // setProfilePicture(response.data.url);
    // } catch (e) {
    //   console.log("error", e);
    // }

    // const formData = new FormData();
    // formData.append("file", fileinput.value);
    // formData.append("upload_preset", "tlzde3q4");
    // const res = await axios.post(
    //   "https://api.cloudinary.com/v1_1/do7mjbvlh/image/upload",
    //   formData
    // );
    // setImage(fileinput.value);
    setEdit(false);
  };
  // const select = async () => {
  //   console.log("uploading");
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "x2szzwml");
  //   try {
  //     const res = await axios.post(
  //       "https://api.cloudinary.com/v1_1/do7mjbvlh/image/upload",
  //       formData
  //     );
  //     console.log("url", res);
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  //   // axios
  //   //   .post("https://api.cloudinary.com/v1_1/do7mjbvlh/image/upload", formData)
  //   //   .then((res) => console.log(res))
  //   //   .catch((e) => console.log(e));
  // };

  return (
    <>
      <div className="profile-container flex">
        <div className="avatar avatar-sm">
          <img
            className="img-responsive img-round"
            src={currentUser?.profileUrl}
            alt="Avatar"
          />
        </div>
        <span className="text-lg text-bold margin-t">
          {currentUser?.firstName} {currentUser?.lastName}
        </span>
        <span className="text-md grey-text">@{currentUser?.username}</span>
        <button
          className="edit-btn text-sm text-bold"
          onClick={() => setEdit((p) => !p)}
        >
          Edit Profile
        </button>

        {edit && (
          <div className="modal-container">
            <div className="modal">
              <div className="avatar avatar-sm">
                <img
                  className="img-responsive img-round"
                  src={currentUser?.profileUrl}
                  alt="Avatar"
                />
              </div>
              <label className="custom-input">
                <input
                  type="file"
                  name="fileinput"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                Change
              </label>
              <button onClick={() => select()}>Upload</button>
              <form className="modal-body text-md" onSubmit={update}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  defaultValue={currentUser?.firstName}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  defaultValue={currentUser?.lastName}
                />
                <label>Description</label>
                <textarea
                  type="text"
                  name="description"
                  defaultValue={currentUser?.description}
                />
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  defaultValue={currentUser?.website}
                />
                <button type="submit" className="btn btn-solid-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        )}

        <button className="edit-btn text-sm text-bold" onClick={logout}>
          Logout
        </button>
        <p className=" person-details text-md text-center">
          {currentUser?.description
            ? currentUser?.description
            : "Edit Profile to add bio data"}
        </p>
        {currentUser?.website ? (
          <a
            href={currentUser?.website}
            target="_blank"
            rel="noreferrer"
            className="nav-icon-link text-md"
          >
            Bio Link
          </a>
        ) : (
          <p className=" person-details text-md text-center">
            Edit Profile to add Bio Link
          </p>
        )}
        <div className="content-data flex text-md">
          <div className="profile-activity flex">
            <span className="text-bold">
              {currentUser?.followers?.length || 0}
            </span>
            <span>Followers</span>
          </div>
          <div className="profile-activity flex">
            <span className="text-bold">1.5k</span>
            <span>Posts</span>
          </div>
          <div className="profile-activity flex">
            <span className="text-bold">
              {currentUser?.following?.length || 0}
            </span>
            <span>Following</span>
          </div>
        </div>
      </div>
      <div className="post-tag">
        <h3>Your Posts</h3>
      </div>
      <div className="posts-container flex">
        {allPosts?.map(
          (post) =>
            post?.username === currentUser?.username && (
              <PostCard key={post?._id} data={post} />
            )
        )}
      </div>
    </>
  );
};
