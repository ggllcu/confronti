import { storyblokInit as storyblokInit$1, apiPlugin } from "@storyblok/js";
let storyblokApiInstance = null;
const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.log(`You can't use getStoryblokApi if you're not loading apiPlugin.`);
  }
  return storyblokApiInstance;
};
const storyblokInit = (options) => {
  const { storyblokApi } = storyblokInit$1(options);
  storyblokApiInstance = storyblokApi;
  options.components || {};
};
async function load() {
  storyblokInit({
    accessToken: "Q3BPyUi1r9J7u7BS4gFYggtt",
    use: [apiPlugin],
    apiOptions: {
      https: true,
      region: "eu"
    }
  });
  let storyblokApi = await useStoryblokApi();
  return {
    storyblokApi
  };
}
export {
  load
};
