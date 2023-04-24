import Navbar from "../components/navbar";
import { createClient } from "contentful";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BlogPostCard from "../components/BlogPostCard";


const blogPosts = [
  {
    slug: "blog-post-1",
    title: "Adversarial networks",
    description:
      "Adversarial networks, also known as generative adversarial networks (GANs), are a type of artificial neural network used in unsupervised machine learning. The main idea behind GANs is to train two neural networks, a generator...",
    image: "/images/tech.webp",
    date: "April 24, 2023",
    author: {
      name: "John Doe",
      authorImage: "/images/john.jpeg",
      title: "Software Engineer",
      topic: "Technology",
    },
  },
  {
    slug: "blog-post-2",
    title: "Elon starship tragedy",
    description:
      "SpaceX’s Starship rocket exploded minutes after launching on an uncrewed test flight, a fiery ending for the inaugural flight of a vehicle that Elon Musk wants to eventually fly on deep-space missions.Mr. Musk, SpaceX’s founder...",
    image: "/images/elon.jpeg",
    date: "April 23, 2023",
    author: {
      name: "Jane Smith",
      authorImage: "/images/Jane.jpeg",
      title: "Journalist",
      topic: "News",
    },
  },
  {
    slug: "blog-post-3",
    title: "The Internet goes Quantum",
    description:
      "Quantum internet is a theoretical future version of the internet that would use quantum communication to provide more secure and powerful communication than is possible with classical...",
    image: "/images/internet.jpeg",
    date: "April 22, 2023",
    author: {
      name: "Bob Johnson",
      authorImage: "/images/bob.jpeg",
      title: "Developer",
      topic: "Science",
    },
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Latest Posts
            </h1>
          </div>
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: "vwy0ghuk1nr5",
    accessToken: "LylgR44z0y0S2VtFEMyOYXxZEm8dcucaMVegFQP87OQ",
  });

  const res = await client.getEntries({
    content_type: "topic",
  });

  return {
    props: {
      categories: res.items,
    },
  };
}