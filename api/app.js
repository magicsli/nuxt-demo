import request from "./request";

export const getInfo = () =>
  request.post(
    "https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test/getinfo",
    { key: "123" }
  );
