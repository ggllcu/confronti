export async function load({ parent }) {
    try {
        const { storyblokApi } = await parent();

        const dataStory = await storyblokApi.get("cdn/stories/", {
            version: "draft",
            starts_with: "notizie"
        });

        console.log(dataStory.data.stories[0])
        return {
            stories: dataStory.data.stories
        };
    } catch (e) {
        console.log('e:', e);
    }
}