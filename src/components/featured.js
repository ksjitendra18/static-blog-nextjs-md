import React from "react";
import Link from "next/link";
const FeaturedCard = () => {
  const featuredPosts = [
    {
      title: "Another Post",
      excerpt:
        "Featured Excerpt",
      slug: "another-post",
    },
    {
      title: "Okay",
      excerpt: "Trying with quite a larger text. This is a large text. This should be a larget text than the previous one. So I think its now big.",
      slug: "okay",
    },
    {
      title: "Sample Post",
      excerpt: "This is sample post",
      slug: "sample-one",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 my-10 ">
      {featuredPosts.map((post) => (
        <div
          key={post.title}
          className="flex-1 border-[#8c7676] border-2 rounded-xl px-4 py-2 flex items-start justify-between hover:bg-[#e0d8d8] transition-all duration-100 ease-in"
        >
          <Link href={`/blog/${post.slug}`}>
            <a className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-2xl mb-3  font-bold">{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              <p className="text-mainbg font-bold mt-2">Read More...</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
