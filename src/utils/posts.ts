export interface IPost {
  posted: number;
  likes: number;
  text: string;
}

// Generate posts
export const posts: { [key: string]: IPost } = {};
const paragraphs = [
  "Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. ",
  "If you're talking to a cat, it's an abnormal event, unrelated to me.",
  "Cool. Just stay in the driveway; the kill-bots are live, and I took you off the whitelist.",
  "Yeah. I can prove it mathematically. Actually, l-l-let me grab my whiteboard. This has been a long time coming, anyways.",
  "Lick, lickity, lick my balls!",
  "And now, human music. boop beep boop... boop beep boop...",
  "My sister died in the spaghetti.",
  "And that's the wayyy, the news goes!",
  "We will return… possibly in different clothing.",
  "25 shmeckles? I-I-I-I don't even know what that- what is that? Is that a lot?",
  "Rick, I don't like glowing rocks in the kitchen trash!",
  "You avoid getting shot in real life all the time, Morty! Just do the same thing here and we'll be fine!",
  "Your failures are your own, old man! I say, follow throooough! And that's why I always say 'Shumshumschilpiddydah!'",
  "I'd like to order one large sofa chair with extra chair please. high chair, no no no recliner... and wheelchair on half. ",
  "Because the world is full of idiots that don't understand what's important. And they'll tear us apart, Morty. But if you stick with me, I'm gonna accomplish great things, Morty. And you're gonna be part of them. And together, we're gonna run around, Morty. We're gonna- do all kinds of wonderful things, Morty. Just you and me, Morty. The outside world is our enemy, Morty. We're the only friends we've got, Morty. It's just Rick and Morty. Rick and Morty and their adventures, Morty. Rick and Morty forever and forever. 100 years, Rick and Morty's things. Me and Rick and Morty running around, and Rick and Morty time. All day long forever. All a hundred days. Rick and Morty forever a hundred times. Over and over."
];

for (let i = 1; i < paragraphs.length; i++) {
  posts[`${i}`] = {
    posted: Math.floor(Math.random() * 59),
    text: paragraphs[i],
    likes: Math.floor(Math.random() * 15)
  };
}

export const getRandomPost = () =>
  posts[Math.ceil(Math.random() * Object.keys(posts).length)];
