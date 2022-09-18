import React from "react";
import Link from "next/link";
const PostCard = ({ slug, title, excerpt }) => {
  return (
    <div className="border-none border-[#8c7676] px-3 py-3 border-2 rounded-xl hover:bg-[#e0d8d8]  transition-all duration-200 ease-in">
      <Link href={`/blog/${slug}`}>
        <a>
          <h2 className="text-2xl mb-3  font-bold">{title}</h2>
          <p>{excerpt}</p>
          <p className="text-mainbg font-bold mt-3">Read More...</p>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
