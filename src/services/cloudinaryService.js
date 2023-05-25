// import axios from "axios";

export const uploadMedia = async (event) => {
  console.log("uploading");
  const formData = new FormData();
  formData.append("file", event.target.files[0]);
  formData.append("upload_preset", "x2szzwml");
  try {
    await fetch(`https://api.cloudinary.com/v1_1/do7mjbvlh/image/upload`, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json)
      .then((data) => console.log("uploaded", data))
      .catch((e) => console.log(e));
    // let response = await axios.post(
    //   "https://api.cloudinary.com/v1_1/do7mjbvlh/image/upload",
    //   formData
    // );
    // console.log("uploaded", response);
    // return response.data.url;
  } catch (e) {
    console.log("error", e);
  }
};
