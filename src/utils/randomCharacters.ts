export const randomCharacters = () => {
  const characterIds = [];
  const count = Math.ceil(Math.random() * 15);

  for (let i = 1; i <= count; i++) {
    characterIds.push(Math.round(Math.random() * 493));
  }

  return characterIds;
};
