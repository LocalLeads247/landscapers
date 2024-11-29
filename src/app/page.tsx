import { getStoryblokApi } from "@storyblok/react";

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  
  try {
    const { data } = await storyblokApi.get('cdn/stories/home', {
      version: 'draft',
    });

    return (
      <main>
        <h1>Welcome to Las Vegas Landscaping</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    );
  } catch (error) {
    console.error('Storyblok Error:', error);
    return <div>Error loading content</div>;
  }
}