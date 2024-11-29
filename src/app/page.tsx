import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  
  try {
    const { data } = await storyblokApi.get('cdn/stories/home', {
      version: 'draft',
    });

    return (
      <main className="container mx-auto py-8">
        <StoryblokComponent blok={data.story.content} />
      </main>
    );
  } catch (error) {
    console.error('Storyblok Error:', error);
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Connection Error: Please check your Storyblok configuration</p>
          <pre className="mt-2 text-sm">{JSON.stringify(error, null, 2)}</pre>
        </div>
      </div>
    );
  }
}