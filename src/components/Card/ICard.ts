import { IPost } from "@Types/post";
export interface ICard {
  userId?: number;
  image?: string;
  title: string;
  post: IPost;
}

export interface ICardHeader extends ICard {
  inView: boolean;
}

export interface ICardBody {
  post: IPost;
}

export interface ICardFooter {
  inView: boolean;
  post: IPost;
}
