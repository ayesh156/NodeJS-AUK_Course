export const selectContentType = (extension) => {
  let select;

  switch (extension) {
    case "html":
      select = "text/html";
      break;
    case "css":
      select = "text/css";
      break;
    case "pdf":
      select = "application/pdf";
      break;
    case "jpg":
      select = "image/jpeg";
      break;
    case "jpeg":
      select = "image/jpeg";
      break;
    case "png":
      select = "image/png";
      break;
    default:
      select = "text/html";
  }

  return select;
};
