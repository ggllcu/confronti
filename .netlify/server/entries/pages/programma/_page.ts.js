async function load({ parent, params }) {
  try {
    const { storyblokApi } = await parent();
    const dataStory = await storyblokApi.get(`cdn/stories/programma`, {
      version: "draft"
    });
    const pageData = {
      story: dataStory.data.story
    };
    console.log(pageData);
    return pageData;
  } catch (e) {
    console.log("e:", e);
  }
}
export {
  load
};
