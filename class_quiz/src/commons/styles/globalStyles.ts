import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 30px;
    font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;";
  }
  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
  @font-face {
    font-family: "NaverFont";
    src: url("/fonts/NanumSquareNeoTTF-bRg.woff");
  }
`;
