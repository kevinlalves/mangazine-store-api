import { stripHtml } from "string-strip-html";

const sanitizeObject = (object) => {
  for (const key of Object.keys(object)) {
    object[key] = stripHtml(object[key]).result.trim();
  }
  return object;
};

export default sanitizeObject;
