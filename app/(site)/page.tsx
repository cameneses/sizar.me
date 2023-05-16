import { getDescription } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

export default async function Home() {
  const { content: description } = await getDescription();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello, I&apos;m{' '}
        <span
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
       bg-clip-text text-transparent"
        >
          César
        </span>
      </h1>

      <div className="py-10">
        <PortableText value={description} />
      </div>
    </div>
  );
}
