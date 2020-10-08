import { UploadFile } from "../../@types/queryTypes";

export const ThumbnailUrl = ({
  source,
  index = 0,
  fullscreen = -1,
  screenWidth = window.innerWidth,
}: {
  source: UploadFile[];
  index?: number;
  fullscreen?: number;
  screenWidth?: number | "thumb";
}) => {
  if (Array.isArray(source) && !source.length) return null;
  const sizes = source.reduce(
    (acc, file) => [
      ...acc,
      [
        file.formats.thumbnail?.url,
        file.url,
        file.formats.small?.url,
        file.formats.medium?.url,
        file.formats.large?.url,
      ],
    ],
    []
  );
  const sizeIndex = (screenWidth: number | "thumb") => {
    switch (true) {
      case fullscreen >= 0:
        return 1;
      case screenWidth === "thumb":
        return 0;
      case screenWidth <= 800:
        return 2;
      case screenWidth > 1680:
        return 4;
      default:
        return 3;
    }
  };
  const doesExist = (i: number): number =>
    sizes[index][i] ? i : doesExist(Math.max(0, i - 1));

  return process.env.API_URL + sizes[index][doesExist(sizeIndex(screenWidth))];
};

export const makeStrShorter = (str: string, n: number): string =>
  str.substring(0, str.indexOf(" ", n + 1)) + " ...";
