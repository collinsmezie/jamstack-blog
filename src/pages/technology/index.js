// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { useEffect, useState } from "react";
// import { createClient } from "contentful";
// import Navbar from "../../components/navbar";
// import Footer from "../../components/footer";
// import Head from "next/head";
// import Link from "next/link";
// import StarIcon from "../../components/StarIcon";
// import styles from "./index.module.css";
// import Image from "next/image";
// import TopicHeader from "@/components/TopicHeader";


// const TechBlogPosts = () => {
//   const [fieldCopies, setFieldCopies] = useState([]);


//   useEffect(() => {
//     const client = createClient({
//       space: "vwy0ghuk1nr5",
//       accessToken: "LylgR44z0y0S2VtFEMyOYXxZEm8dcucaMVegFQP87OQ",
//     });

//     client
//       .getEntries({
//         content_type: "topic",
//         "fields.name": "TECHNOLOGY",
//       })
//       .then((response) => {
//         const {
//           fields: { post },
//           sys,
//         } = response.items[0];
//         console.log(post);

//         const copies = post.map(({ fields = {}, sys }) => {
//           const {
//             authorName = "",
//             authorPhoto = "",
//             authorWebsite = "",
//             blogPostImage = "",
//             postBody = {},
//             postTitle = "",
//             published = "",
//           } = fields;

//           return {
//             authorName,
//             authorPhoto: authorPhoto && `https:${authorPhoto.fields.file.url}`,
//             authorWebsite,
//             blogPostImage: blogPostImage && `https:${blogPostImage.fields.file.url}`,
//             postBody: postBody && postBody.content[0],
//             postTitle,
//             published,
//             id: sys.id,
//           };
//         });

//         setFieldCopies(copies);
//       })
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="mx-auto max-w-7xl">
//       {/* // <div className="mx-auto"> */}

//       <Navbar />
//       <Head>
//         <title>Technology Blog Posts</title>
//       </Head>
//       <div className="container mx-auto px-4 border border-teal-100">

//         <TopicHeader
//           title="TECHNOLOGY"
//           onFollow={() => console.log("Follow clicked")}
//           onStartWriting={() => console.log("Start writing clicked")}
//         />

//         {fieldCopies.map((fields) => (
//           <div key={fields.id} className={styles.postCard}>
//             <div className={styles.profileInfo}>
//               <div className="">
//                 {fields.authorPhoto && (
//                   <Image
//                     src={fields.authorPhoto}
//                     alt={fields.authorName}
//                     className="w-12 h-12 rounded-full mr-4"
//                     width={50}
//                     height={50}
//                   />
//                 )}
//               </div>
//               <div className={styles.nameAndDate}>
//                 <p>{fields.authorName}</p>
//                 <p className="text-gray-500 text-sm mt-0.5">
//                   Published on: {new Date(fields.published).toDateString()}
//                 </p>
//               </div>
//               <div className="ml-4 flex items-center">
//                 <StarIcon className="w-6 h-6 mr-2" />
//                 <p className="ml-4 text-gray-500 text-sm">Members only</p>
//               </div>
//             </div>
//             <div className={styles.postSection}>
//               <div className={styles.postTitleAndText}>
//                 <h2 className="text-2xl font-bold mb-4">{fields.postTitle}</h2>
//                 <div className="max-w-4xl mb-7">
//                   {documentToReactComponents(fields.postBody)}
//                 </div>
//                 <div className="flex items-center">
//                   <Link href={`/technology/${fields.id}`}>
//                     {/* <div className={styles.readPostBtn}>Read More</div> */}
//                     <div className="bg-teal-500 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-teal-600 transition-all duration-300 cursor-pointer text-sm">Read More</div>
//                   </Link>
//                 </div>
//               </div>
//               <div className="mb-10">
//                 {fields.blogPostImage && (
//                   <Image
//                     src={fields.blogPostImage}
//                     width={180}
//                     height={100}
//                     alt={fields.postTitle}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default TechBlogPosts;


















import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";
import StarIcon from "../../components/StarIcon";
import styles from "./index.module.css";
import Image from "next/image";
import TopicHeader from "@/components/TopicHeader";

const TechBlogPosts = () => {
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
        "fields.name": "TECHNOLOGY",
      })
      .then((response) => {
        const {
          fields: { post },
        } = response.items[0];

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
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Head>
        <title>Technology Blog Posts</title>
      </Head>
      <div className="container mx-auto px-4 border border-teal-100">

        <TopicHeader
          title="TECHNOLOGY"
          onFollow={() => console.log("Follow clicked")}
          onStartWriting={() => console.log("Start writing clicked")}
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500 border-solid"></div>
          </div>
        ) : (
          fieldCopies.map((fields) => (
            <div key={fields.id} className={styles.postCard}>
              <div className={styles.profileInfo}>
                <div>
                  {fields.authorPhoto && (
                    <Image
                      src={fields.authorPhoto}
                      alt={fields.authorName}
                      className="w-12 h-12 rounded-full mr-4"
                      width={50}
                      height={50}
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
                    <Link href={`/technology/${fields.id}`}>
                      <div className="bg-teal-500 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-teal-600 transition-all duration-300 cursor-pointer text-sm">
                        Read More
                      </div>
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
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TechBlogPosts;
