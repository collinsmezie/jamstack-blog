import styles from "./components.module.css";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import Link from "next/link";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const client = createClient({
        space: "vwy0ghuk1nr5",
        accessToken: "LylgR44z0y0S2VtFEMyOYXxZEm8dcucaMVegFQP87OQ",
      });

      const response = await client.getEntries({
        content_type: "topic",
      });

      setCategories(response.items);
    }

    fetchCategories();
  }, []);

  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center space-x-12">
        <div>
          <img src="/images/blog.png" alt="Logo" width={140} height={140} />
        </div>
        {categories &&
          categories.map((category) => (
            <Link
              key={category.sys.id}
              href={`/${category.fields.slug}`}
              passHref
            >
              {console.log(category.fields.slug)}
              <div
                className={`${styles["category-link"]} text-lg font-light font-sans hover:text-teal-500 hover:border-teal-500 transition-colors duration-100 cursor-pointer`}
              >
                {category.fields.name}
              </div>
            </Link>
          ))}
        <div className="text-lg font-light font-sans text-gray-800 hover:text-gray-600 cursor-pointer">
          John
        </div>
        <button className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-2 px-4 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
}
