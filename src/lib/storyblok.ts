import { storyblokInit, apiPlugin } from '@storyblok/react';
import TestComponent from '../components/TestComponent';

const components = {
  test: TestComponent,
};

export function initStoryblok() {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components,
    apiOptions: {
      region: 'us'
    }
  });
}