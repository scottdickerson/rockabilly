import { mapDataToImagesAndAudio } from "../dataFormatterFunctions";
import artists from "../../data/LocalLegends.json";

describe("dataFormatterFunction", () => {
  test("mapDataToImagesAndAudio", () => {
    const mappedArtists = mapDataToImagesAndAudio(artists);
    expect(mappedArtists[0].thumbnail).toEqual(
      "thumbnailImages/234x234-BillyLeeRiley.png"
    );
    expect(mappedArtists[0].detailImage.src).toEqual(
      "detailImages/616x507-BillyLeeRiley.png"
    );
  });
});
