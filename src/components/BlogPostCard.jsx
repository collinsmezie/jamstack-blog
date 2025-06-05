// components/BlogPostCard.jsx
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import StarIcon from "./StarIcon";
import styles from "../pages/technology/index.module.css"; // adjust path if needed

const BlogPostCard = ({
  id,
  authorName,
  authorPhoto,
  authorWebsite,
  blogPostImage,
  postBody,
  postTitle,
  published,
  slug
}) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.profileInfo}>
        <div>
          {authorPhoto && (
            <Image
              src={authorPhoto}
              alt={authorName}
              className="w-12 h-12 rounded-full mr-4"
              width={50}
              height={50}
            />
          )}
        </div>
        <div className={styles.nameAndDate}>
          <p>{authorName}</p>
          <p className="text-gray-500 text-sm mt-0.5">
            Published on: {new Date(published).toDateString()}
          </p>
        </div>
        <div className="ml-4 flex items-center">
          <StarIcon className="w-6 h-6 mr-2" />
          <p className="ml-4 text-gray-500 text-sm">Members only</p>
        </div>
      </div>

      <div className={styles.postSection}>
        <div className={styles.postTitleAndText}>
          <h2 className="text-2xl font-bold mb-4">{postTitle}</h2>
          <div className="max-w-4xl mb-7">
            {documentToReactComponents(postBody)}
          </div>
          <div className="flex items-center">
            <Link href={`/${slug}/${id}`}>
              <div className="bg-teal-500 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-teal-600 transition-all duration-300 cursor-pointer text-sm">
                Read More
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-10">
          {blogPostImage && (
            <Image
              src={blogPostImage}
              width={180}
              height={100}
              alt={postTitle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
