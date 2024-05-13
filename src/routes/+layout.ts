import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte"

export async function load() {
    storyblokInit({
      accessToken: "Q3BPyUi1r9J7u7BS4gFYggtt",
      use: [apiPlugin],
      apiOptions: {
        https: true,
        region: "eu"
      },
    });
    let storyblokApi = await useStoryblokApi();
   
    return {
      storyblokApi: storyblokApi,
    };
  }