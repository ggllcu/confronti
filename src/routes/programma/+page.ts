import type { StoryblokStory } from 'storyblok-generate-ts';
import type { ProgrammaStoryblok } from "../../types/component-types-sb.d";

type PageData = {
    story: StoryblokStory<ProgrammaStoryblok>
}

export async function load({ parent, params }) {
	try {
			const { storyblokApi } = await parent();
		   
			const dataStory = await storyblokApi.get(`cdn/stories/programma`, {
			  version: "draft",
			});

			const pageData: PageData = {
				story: dataStory.data.story 
			}
			console.log(pageData)

			return pageData
	} catch (e) {
		console.log('e:', e);
	}
}
