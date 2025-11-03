export const strContains = (sourceString, searchString) => {
  if (!sourceString || !searchString) return true;
  return sourceString.toLowerCase().includes(searchString.toLowerCase());
};