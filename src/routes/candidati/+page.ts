import type { StoryblokStory } from 'storyblok-generate-ts';
import type { CandidatiStoryblok } from "../../types/component-types-sb.d";

type PageData = {
    stories: StoryblokStory<CandidatiStoryblok>[]
}

export async function load({ parent }) {
    try {
        const { storyblokApi } = await parent()

        const dataStory = await storyblokApi.get("cdn/stories/", {
            version: "draft",
            starts_with: "candidati",
            content_type: "Candidati"
        });

        const pageData: PageData = {
            stories: dataStory.data.stories
        }

        return pageData
    } catch (e) {
        console.log('e:', e);
    }
}