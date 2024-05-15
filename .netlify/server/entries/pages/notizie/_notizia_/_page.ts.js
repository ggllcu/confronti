async function load({ parent, params }) {
  try {
    const { storyblokApi } = await parent();
    const dataStory = await storyblokApi.get(`cdn/stories/notizie/${params.notizia}`, {
      version: "draft"
    });
    return {
      story: dataStory.data.story
    };
  } catch (e) {
    console.log("e:", e);
  }
}
export {
  load
};
