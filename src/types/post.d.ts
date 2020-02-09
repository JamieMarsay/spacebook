export interface IPost {
  [key: string]: any;
  comments: IComment[];
  posted: number;
  likes: number;
  text: string;
}

export interface IComment {
  name: string;
  text: string;
}
