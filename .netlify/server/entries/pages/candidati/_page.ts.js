async function load({ parent }) {
  try {
    const { storyblokApi } = await parent();
    const dataStory = await storyblokApi.get("cdn/stories/", {
      version: "draft",
      starts_with: "candidati",
      content_type: "Candidati"
    });
    const candidateDataStory = await storyblokApi.get(`cdn/stories/candidati/settings`, {
      version: "draft"
    });
    const pageData = {
      candidates: candidateDataStory.data.story,
      stories: dataStory.data.stories
    };
    return pageData;
  } catch (e) {
    console.log("e:", e);
  }
}
export {
  load
};
