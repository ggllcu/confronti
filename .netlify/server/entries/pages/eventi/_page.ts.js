async function load({ parent }) {
  try {
    const { storyblokApi } = await parent();
    const dataStory = await storyblokApi.get("cdn/stories/", {
      version: "draft",
      starts_with: "eventi",
      content_type: "Eventi"
    });
    const eventsDataStory = await storyblokApi.get(`cdn/stories/eventi/settings`, {
      version: "draft"
    });
    const passedEvents = dataStory.data.stories.filter((item) => new Date(item.content.date) < /* @__PURE__ */ new Date());
    const incomingEvents = dataStory.data.stories.filter((item) => new Date(item.content.date) > /* @__PURE__ */ new Date());
    const pageData = {
      stories: {
        passed: passedEvents,
        incoming: incomingEvents
      },
      events: eventsDataStory.data.story
    };
    return pageData;
  } catch (e) {
    console.log("e:", e);
  }
}
export {
  load
};
