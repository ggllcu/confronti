import type { StoryblokStory } from 'storyblok-generate-ts';
import type { EventiStoryblok } from "../../../types/component-types-sb.d";

type PageData = {
    story: StoryblokStory<EventiStoryblok>
}

export async function load({ parent, params }) {
	try {
			const { storyblokApi } = await parent();
		   
			const dataStory = await storyblokApi.get(`cdn/stories/eventi/${params.evento}`, {
			  version: "draft",
			});

			console.log(dataStory.data.story)

			const pageData: PageData = {
				story: dataStory.data.story
			}

			return pageData
	} catch (e) {
		console.log('e:', e);
	}
}
