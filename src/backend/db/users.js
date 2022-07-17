import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Deekshith",
    lastName: "M D",
    username: "deekshithmd",
    password: "deekshith123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    description:
      "Learning FullStack web development in NeogCamp | Completed 5 FrontEnd Projects | HTML5, CSS, Javascript, ReactJS",
    website: "https://github.com/deekshithmd",
    profileUrl:
      "https://res.cloudinary.com/do7mjbvlh/image/upload/v1658033367/social-media/myPhoto_z6ciez.jpg",
  },
  {
    _id: uuid(),
    firstName: "Deekshith",
    lastName: "Mogra",
    username: "deekshithmogra",
    password: "deekshithmogra123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileUrl:
      "https://res.cloudinary.com/do7mjbvlh/image/upload/v1658031741/social-media/water_dbpe8a.jpg",
  },
  {
    _id: uuid(),
    firstName: "Deepak",
    lastName: "M D",
    username: "deepakmd",
    password: "deepak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileUrl:
      "https://res.cloudinary.com/do7mjbvlh/image/upload/v1658031133/social-media/soil_g5sigb.jpg",
  },
  {
    _id: uuid(),
    firstName: "Deepak",
    lastName: "Mogra",
    username: "deepakmogra",
    password: "deepakmogra123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileUrl:
      "https://res.cloudinary.com/do7mjbvlh/image/upload/v1658031845/social-media/jose-alfonso-sierra-K-VkvGjaMtI-unsplash_aefujk.jpg",
  },
];
