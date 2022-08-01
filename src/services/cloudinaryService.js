export const uploadMedia = async (file) => {
  console.log("uploading");
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "x2szzwml");
  try {
    let response = await fetch(
      `https://api.cloudinary.com/v1_1/do7mjbvlh/image/upload`,
      {
        method: "post",
        mode: "cors",
        body: formData,
      }
    );
    return response.data.url;
  } catch (e) {
    console.log("error", e);
  }
};
