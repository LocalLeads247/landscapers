import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const components = {
  // We'll add our components here
};

export function initStoryblok() {
  storyblokInit({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
    components,
    apiOptions: {
      region: "us", // or 'eu' depending on your Storyblok space region
    },
  });
}