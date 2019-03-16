/** adds the thumbnail and detail image files to the json */
export const mapDataToImagesAndAudio = data => {
  return data.map((artist, index) => {
    const artistName = artist.name.replace(/ /g, "");
    return {
      ...artist,
      id: index,
      thumbnail: `/thumbnailImages/234x234-${artistName}.png`,
      detailImage: {
        ...artist.detailImage,
        src: `/detailImages/616x507-${artistName}.png`
      }
    };
  });
};
