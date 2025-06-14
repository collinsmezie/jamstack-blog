
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./components.module.css";



const DefaultPostCard = ({ slug, title, image, description, date, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Link href={`/blog/${slug}`}>

        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

      </Link>
      <div className="px-6 py-8">
        <div className="font-semibold text-teal-500 text-sm mb-2">{date}</div>
        <Link href={`/blog/${slug}`}>

          <h1 className="text-2xl font-bold mb-4 hover:text-teal-500 transition-colors duration-300">
            {title}
          </h1>

        </Link>
        <p className="text-gray-700 mb-5">{description}<span className="font-semibold">See more</span></p>
        <div>
          <div className="flex">
            <div className="flex-shrink-0">
              <Image
                src={author.authorImage}
                alt={author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div className="ml-1">
              <div className="font-semibold text-gray-900">{author.name}</div>
              <div className="text-sm text-gray-500 mb-6">{author.title}</div>
            </div>
          </div>
          <div className={styles.postTopic}>{author.topic}</div>
        </div>

      </div>
    </div>
  );
};


export default DefaultPostCard;