import Link from 'next/link';

const NoPublishedPosts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-48">
      <p className="text-gray-500 mb-4 text-center">
        There are no published posts for {topic} yet.
      </p>
      <Link href="/contentful">
        <div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Create new post
        </div>
      </Link>
    </div>
  );
};

export default NoPublishedPosts;

