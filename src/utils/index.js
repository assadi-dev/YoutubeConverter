/**
 * Extract id on youtube video url
 *
 * @param {string} url youtube link
 */
export const extractYoutubeIdVideo = (url) => {
  return url.split("https://www.youtube.com/watch?v=")[1].trim();
};

/**
 * Get correct value before converted
 * @param {string} value
 * @returns
 */
export const isValidYoutubeId = (value) => {
  if (value.includes("https://www.youtube.com/watch?v=")) {
    return extractYoutubeIdVideo(value);
  } else {
    return value;
  }
};
