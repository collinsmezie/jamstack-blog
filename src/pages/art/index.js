import NoPublishedPosts from "../../components/noPublishedPosts";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";
import TagIcon from "../../components/TagIcon";
import StarIcon from "../../components/StarIcon";
import styles from "../technology/index.module.css";
import Image from "next/image";


const ArtBlogPosts = () => {
  const [fieldCopies, setFieldCopies] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const client = createClient({
      space: "vwy0ghuk1nr5",
      accessToken: "LylgR44z0y0S2VtFEMyOYXxZEm8dcucaMVegFQP87OQ",
    });

    client
      .getEntries({
        content_type: "topic",
        "fields.name": "ART",
      })
      .then((response) => {
        const {
          fields: { post },
          sys,
        } = response.items[0];
      
        if (!response.items[0].fields.hasOwnProperty('post')) {
            const dataObj = {
              noPost: true,
              topic: response.items[0].fields.name,
              sysId: response.items[0].sys.id
            }
            setData(dataObj)
            return;
        }


        const copies = post.map(({ fields = {}, sys }) => {
          const {
            authorName = "",
            authorPhoto = "",
            authorWebsite = "",
            blogPostImage = "",
            postBody = {},
            postTitle = "",
            published = "",
          } = fields;

          return {
            authorName,
            authorPhoto: authorPhoto && authorPhoto.fields.file.url,
            authorWebsite,
            blogPostImage: blogPostImage && blogPostImage.fields.file.url,
            postBody: postBody && postBody.content[0],
            postTitle,
            published,
            id: sys.id,
          };
        });

        setFieldCopies(copies);
      })
      .catch(console.error);
  }, []);

  if(data.noPost) return(
    <>
    {/* <Navbar />  */}
    <NoPublishedPosts topic={data.topic} id={data.sysId} />
    {/* <Footer />   */}
    </>
  )

  return (
    <div className="mx-auto">
      <Navbar />
      <Head>
        <title>ART Blog Posts</title>
      </Head>
      <div className={styles.topicSection}>
        <div className={styles.topic}>
          <div className="inline-block rounded-full bg-gray-200 p-1 mr-3">
            <TagIcon />
          </div>
          <h1 className={styles.tech}>ART</h1>
        </div>
        <div className={styles.buttons}>
          <button className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300">
            Follow
          </button>
          <button className="hover:bg-white text-teal-500 hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300">
            Start writing
          </button>
        </div>
      </div>

      {fieldCopies.map((fields) => (
        <div key={fields.id} className={styles.postCard}>
          <div className={styles.profileInfo}>
            <div className="">
              {fields.authorPhoto && (
                <Image
                  src={fields.authorPhoto}
                  alt={fields.authorName}
                  className="w-12 h-12 rounded-full mr-4"
                />
              )}
            </div>
            <div className={styles.nameAndDate}>
              <p>{fields.authorName}</p>
              <p className="text-gray-500 text-sm mt-0.5">
                Published on: {new Date(fields.published).toDateString()}
              </p>
            </div>
            <div className="ml-4 flex items-center">
              <StarIcon className="w-6 h-6 mr-2" />
              <p className="ml-4 text-gray-500 text-sm">Members only</p>
            </div>
          </div>
          <div className={styles.postSection}>
            <div className={styles.postTitleAndText}>
              <h2 className="text-2xl font-bold mb-4">{fields.postTitle}</h2>
              <div className="max-w-4xl mb-7">
                {documentToReactComponents(fields.postBody)}
              </div>
              <div className="flex items-center">
                <Link href={`/cinema/${fields.id}`}>
                  <div className={styles.readPostBtn}>Read More</div>
                </Link>
              </div>
            </div>
            <div className="mb-10">
              {fields.blogPostImage && (
                <Image
                  src={fields.blogPostImage}
                  width={180}
                  height={100}
                  alt={fields.postTitle}
                />
              )}
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ArtBlogPosts;

      