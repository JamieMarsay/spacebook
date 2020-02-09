import { IPost } from "./post";

export interface IUser {
  name: string;
  image: string;
  post: IPost;
  id: number;
}
