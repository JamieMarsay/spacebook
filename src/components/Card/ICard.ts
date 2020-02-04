export interface ICard {
  action?: () => void;
  title: string;
  post: IPost;
  src: string;
}

interface IPost {
  posted: number;
  likes: number;
  text: string;
}
