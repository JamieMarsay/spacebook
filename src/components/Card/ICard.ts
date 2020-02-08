export interface IUsesPost {
  post: IPost;
}
export interface ICard {
  action?: () => void;
  user: IUser;
}

export interface ICardHeader extends IUsesPost {
  inView: boolean;
  image: string;
  title: string;
}

export interface ICardBody extends IUsesPost {
  inView: boolean;
}

export interface ICardFooter extends IUsesPost {
  inView: boolean;
}

interface IUser {
  location: string;
  image: string;
  name: string;
  post: IPost;
}

interface IPost {
  comments: IComment[];
  posted: number;
  likes: number;
  text: string;
}

export interface IComment {
  text: string;
  name: string;
}
