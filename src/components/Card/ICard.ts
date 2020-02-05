export interface ICard {
  action?: () => void;
  title: string;
  post: IPost;
  src: string;
}

interface IPost {
  comments: string[];
  posted: number;
  likes: number;
  text: string;
}
