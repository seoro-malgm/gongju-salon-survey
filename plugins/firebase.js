import authAPI from "~/apis/auth";
import archiveItemsAPI from "~/apis/archiveItems";
import storageAPI from "~/apis/storage";
import newsAPI from "~/apis/news";
import newsletterAPI from "~/apis/newsletter";
import discussionAPI from "~/apis/discussion";

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject("firebase", () => {
    return {
      ...authAPI,
      ...archiveItemsAPI,
      ...storageAPI,
      ...newsAPI,
      ...newsletterAPI,
      ...discussionAPI,
    };
  });
};
