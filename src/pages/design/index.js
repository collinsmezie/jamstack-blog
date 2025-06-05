import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";
import StarIcon from "../../components/StarIcon";
import styles from "../technology/index.module.css";
import Image from "next/image";
import TopicHeader from "@/components/TopicHeader";
import BlogPostCard from "@/components/BlogPostCard";



const DesignBlogPosts = () => {
  const [fieldCopies, setFieldCopies] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state


  useEffect(() => {
    const client = createClient({
      space: "vwy0ghuk1nr5",
      accessToken: "LylgR44z0y0S2VtFEMyOYXxZEm8dcucaMVegFQP87OQ",
    });

    client
      .getEntries({
        content_type: "topic",
        "fields.name": "DESIGN",
      })
      .then((response) => {
        const {
          fields: { post },
          sys,
        } = response.items[0];
        console.log('Design response here', response);

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
            authorPhoto: authorPhoto && `https:${authorPhoto.fields.file.url}`,
            authorWebsite,
            blogPostImage: blogPostImage && `https:${blogPostImage.fields.file.url}`,
            postBody: postBody && postBody.content[0],
            postTitle,
            published,
            id: sys.id,
            slug: "design",
          };
        });

        setFieldCopies(copies);
        setLoading(false); // 👈 stop loading
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // still stop loading on error
      });
  }, []);

  return (
    // <div className="mx-auto">
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Head>
        <title>Design Blog Posts</title>
      </Head>
      {/* <div className="container mx-auto px-4 border border-teal-100"> */}
      <div className="container mx-auto px-4">
        <TopicHeader
          title="DESIGN"
          // icon={<StarIcon />}
          onFollow={() => console.log("Follow clicked")}
          onStartWriting={() => console.log("Start writing clicked")}
        />


        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500 border-solid"></div>
          </div>
        ) : (
          fieldCopies.map((fields) => (

            <BlogPostCard
              key={fields.id}
              id={fields.id}
              authorName={fields.authorName}
              authorPhoto={fields.authorPhoto}
              authorWebsite={fields.authorWebsite}
              blogPostImage={fields.blogPostImage}
              postBody={fields.postBody}
              postTitle={fields.postTitle}
              published={fields.published}
              slug={fields.slug}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DesignBlogPosts;
