export interface IPost {
  [key: string]: any;
  comments: IComment[];
  posted: number;
  likes: number;
  text: string;
}

export interface IComment {
  userId: number;
  image: string;
  name: string;
  text: string;
}
