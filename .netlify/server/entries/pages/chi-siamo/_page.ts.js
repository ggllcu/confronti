async function load({ parent, params }) {
  try {
    const { storyblokApi } = await parent();
    const dataStory = await storyblokApi.get(`cdn/stories/chi-siamo`, {
      version: "draft"
    });
    const pageData = {
      story: dataStory.data.story
    };
    return pageData;
  } catch (e) {
    console.log("e:", e);
  }
}
export {
  load
};
