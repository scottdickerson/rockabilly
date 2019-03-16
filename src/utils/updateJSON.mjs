import fs from "fs";
import path from "path";
import { mapDataToImagesAndAudio } from "./dataFormatterFunctions.mjs";
import artists from "../data/LocalLegends.json";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

fs.writeFileSync(
  path.join(__dirname, "..", "data", "LocalLegends.json"),
  JSON.stringify(mapDataToImagesAndAudio(artists), null, 2)
);
