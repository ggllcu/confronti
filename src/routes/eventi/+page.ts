import type { StoryblokStory } from 'storyblok-generate-ts';
import type { EventiStoryblok } from "../../types/component-types-sb.d";
import type { PageSettingsStoryblok } from "../../types/component-types-sb.d";

type PageData = {
    stories: {
        passed: StoryblokStory<EventiStoryblok>[],
        incoming: StoryblokStory<EventiStoryblok>[]
    }
	events: StoryblokStory<PageSettingsStoryblok>
}

export async function load({ parent }) {
    try {
        const { storyblokApi } = await parent();

        const dataStory = await storyblokApi.get("cdn/stories/", {
            version: "draft",
            starts_with: "eventi",
            content_type: "Eventi"
        });
        const eventsDataStory = await storyblokApi.get(`cdn/stories/eventi/settings`, {
			version: "draft",
		});

        const passedEvents: StoryblokStory<EventiStoryblok>[] = dataStory.data.stories.filter((item: StoryblokStory<EventiStoryblok>) => new Date(item.content.date) < new Date())
        const incomingEvents: StoryblokStory<EventiStoryblok>[] = dataStory.data.stories.filter((item: StoryblokStory<EventiStoryblok>) => new Date(item.content.date) > new Date())

        const pageData: PageData = {
            stories: {
                passed: passedEvents,
                incoming: incomingEvents
            },
            events: eventsDataStory.data.story
        }

        return pageData
    } catch (e) {
        console.log('e:', e);
    }
}