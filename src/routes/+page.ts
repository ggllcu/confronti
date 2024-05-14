import type { StoryblokStory } from 'storyblok-generate-ts';
import type { ProgrammaStoryblok } from "../types/component-types-sb.d";
import type { PageSettingsStoryblok } from "../types/component-types-sb.d";

type PageData = {
	home: StoryblokStory<ProgrammaStoryblok>
	program: StoryblokStory<ProgrammaStoryblok>
	candidates: StoryblokStory<PageSettingsStoryblok>
	events: StoryblokStory<PageSettingsStoryblok>
}

export async function load({ parent, params }) {
	try {
		const { storyblokApi } = await parent();

		const homeDataStory = await storyblokApi.get(`cdn/stories/home
		`, {
			version: "draft",
		});
		const programDataStory = await storyblokApi.get(`cdn/stories/programma`, {
			version: "draft",
		});
		const candidateDataStory = await storyblokApi.get(`cdn/stories/candidati/settings`, {
			version: "draft",
		});
		const eventsDataStory = await storyblokApi.get(`cdn/stories/eventi/settings`, {
			version: "draft",
		});

		const pageData: PageData = {
			home: homeDataStory.data.story,
			program: programDataStory.data.story,
			candidates: candidateDataStory.data.story,
			events: eventsDataStory.data.story
		}

		return pageData
	} catch (e) {
		console.log('e:', e);
	}
}
