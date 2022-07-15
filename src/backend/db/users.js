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
  },
  {
    _id: uuid(),
    firstName: "Deekshith",
    lastName: "Mogra",
    username: "deekshithmogra",
    password: "deekshithmogra123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Deepak",
    lastName: "M D",
    username: "deepakmd",
    password: "deepak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Deepak",
    lastName: "Mogra",
    username: "deepakmogra",
    password: "deepakmogra123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
