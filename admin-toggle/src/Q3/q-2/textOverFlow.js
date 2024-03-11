const MAX_CONTENT_LENGTH = 200;
export const textOverFlow = (userContent) => {
  if (userContent.length > MAX_CONTENT_LENGTH) {
    return userContent.substring(0, MAX_CONTENT_LENGTH) + "...";
  }
  return userContent;
};
