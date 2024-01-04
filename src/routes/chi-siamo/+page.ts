import type { StoryblokStory } from 'storyblok-generate-ts';
import type { ChiSiamoStoryblok } from "../../types/component-types-sb.d";

type PageData = {
    story: StoryblokStory<ChiSiamoStoryblok>
}

export async function load({ parent, params }) {
	try {
			const { storyblokApi } = await parent();
		   
			const dataStory = await storyblokApi.get(`cdn/stories/chi-siamo`, {
			  version: "draft",
			});

			const pageData: PageData = {
				story: dataStory.data.story 
			}

			return pageData
	} catch (e) {
		console.log('e:', e);
	}
}
