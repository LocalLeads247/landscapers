import { initStoryblok } from '../lib/storyblok';
import './globals.css';

initStoryblok();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}