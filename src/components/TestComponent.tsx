import { storyblokEditable } from '@storyblok/react';

const TestComponent = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="text-2xl p-6 bg-green-100 rounded">
    {blok.headline || 'Test Component'}
  </div>
);

export default TestComponent;