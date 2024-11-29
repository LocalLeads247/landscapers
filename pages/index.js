import { getStoryblokApi } from '@storyblok/react';

export default function Home({ story }) {
  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
  });

  return {
    props: {
      story: data.story,
    },
    revalidate: 3600,
  };
}