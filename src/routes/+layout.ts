import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte"

export async function load() {
    storyblokInit({
      accessToken: "obMnqH1kXEpev0pJjWLWQQtt",
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