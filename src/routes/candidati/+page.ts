import type { StoryblokStory } from 'storyblok-generate-ts';
import type { CandidatiStoryblok } from "../../types/component-types-sb.d";
import type { PageSettingsStoryblok } from "../../types/component-types-sb.d";

type PageData = {
    stories: StoryblokStory<CandidatiStoryblok>[]
	candidates: StoryblokStory<PageSettingsStoryblok>
}

export async function load({ parent }) {
    try {
        const { storyblokApi } = await parent()

        const dataStory = await storyblokApi.get("cdn/stories/", {
            version: "draft",
            starts_with: "candidati",
            content_type: "Candidati"
        });
        const candidateDataStory = await storyblokApi.get(`cdn/stories/candidati/settings`, {
			version: "draft",
		});

        const pageData: PageData = {
			candidates: candidateDataStory.data.story,
            stories: dataStory.data.stories
        }

        return pageData
    } catch (e) {
        console.log('e:', e);
    }
}