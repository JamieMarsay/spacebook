interface IPost {
  text: string;
  likes: number;
}

export const posts: { [key: string]: IPost } = {
  1: {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    likes: 0
  },
  2: {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 4
  },
  3: {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
    likes: 19
  },
  4: {
    text: "Lorem ipsum dolor sit amet.",
    likes: 2
  }
};

export const getRandomPost = () =>
  posts[Math.ceil(Math.random() * Object.keys(posts).length)];
