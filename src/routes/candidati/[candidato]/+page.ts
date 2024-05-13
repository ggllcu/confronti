import type { StoryblokStory } from 'storyblok-generate-ts';
import type { CandidatiStoryblok } from "../../../types/component-types-sb.d";

type PageData = {
    story: StoryblokStory<CandidatiStoryblok>
}

export async function load({ parent, params }) {
	try {
			const { storyblokApi } = await parent();
		   
			const dataStory = await storyblokApi.get(`cdn/stories/candidati/${params.candidato}`, {
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
