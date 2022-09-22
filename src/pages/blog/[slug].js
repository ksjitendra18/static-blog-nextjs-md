import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
export default function PostPage({ frontmatterData, content, slug }) {
  return (
    <>
      <Head>
        <title>{frontmatterData.title} - EverythingCS</title>
        <meta name="description" content={frontmatterData.description} />
      </Head>
      <div>
        <div className="w-full">
          {/* <div className="flex justify-between items-center mt-4"> */}
            <h1 className="text-4xl my-4 font-bold">{frontmatterData.title}</h1>
          {/* </div> */}

          <article className="blog-text mt-2">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            {/* <div dangerouslySetInnerHTML={{__html: content}}></div> */}
          </article>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const blogPostFiles = fs.readdirSync(path.join("posts"));
  const paths = blogPostFiles.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownData = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatterData, content } = matter(markdownData);

  return {
    props: {
      frontmatterData,
      content,
    },
  };
}
