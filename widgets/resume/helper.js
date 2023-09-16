
export const removeHttp = (str) => {
  if (!str) {
    return "";
  }
  if (str.includes("www.")) {
    return str.split("www.")[1];
  }
  if (str.includes("://")) {
    return str.split("://")[1];
  }
  return str;
}
