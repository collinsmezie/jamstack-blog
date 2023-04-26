import Link from 'next/link';

const NoPublishedPosts = ({topic, id}) => {
  const url = `https://app.contentful.com/spaces/vwy0ghuk1nr5/entries/${id}`
  return (
    <div className="flex flex-col items-center justify-center h-48">
      <p className="text-gray-500 mb-4 text-center">
        There are no published posts for {topic} yet.
      </p>
      <Link href={url}>
        <div className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">
          <strong>+ </strong>Create new post
        </div>
      </Link>
    </div>
  );
};

export default NoPublishedPosts;

