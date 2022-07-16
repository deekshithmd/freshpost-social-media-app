import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Hello everyone, I am here with some important information about how we can improve productivity in farming...When you are providing fertilizers to any plant/treee provide all nutrients rather than providing only few...",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "deekshithmd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "To avoid gettiing deseases in farm, provide all nutrients rather than providing few, if you provide only few then the deficieny of other nutrients causes deseases",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "deepakmd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
