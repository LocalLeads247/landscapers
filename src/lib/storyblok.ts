import { storyblokInit, apiPlugin } from "@storyblok/react";

const components = {};

export function initStoryblok() {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components,
  });
}