import type { StoryblokStory } from 'storyblok-generate-ts';
import type { ProgrammaStoryblok } from "../types/component-types-sb.d";
import type { PageSettingsStoryblok } from "../types/component-types-sb.d";

type PageData = {
    program: StoryblokStory<ProgrammaStoryblok>
    candidates: StoryblokStory<PageSettingsStoryblok>
}

export async function load({ parent, params }) {
	try {
			const { storyblokApi } = await parent();
		   
			const programDataStory = await storyblokApi.get(`cdn/stories/programma`, {
			  version: "draft",
			});
			const candidateDataStory = await storyblokApi.get(`cdn/stories/candidati/settings`, {
				version: "draft",
			  });

			console.log(candidateDataStory)

			const pageData: PageData = {
				program: programDataStory.data.story,
				candidates: candidateDataStory.data.story
			}

			return pageData
	} catch (e) {
		console.log('e:', e);
	}
}
