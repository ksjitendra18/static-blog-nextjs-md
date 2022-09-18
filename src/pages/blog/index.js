import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import PostCard from "../../components/postCard.js/post";
import FeaturedCard from "../../components/featured";
const Home = ({ posts }) => {
  return (
    <>

    <Head>
      <title>Blog - EverythingCS</title>
    </Head>
      <section className="featured">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Blog Post</h2>

        <div>
          <FeaturedCard />
        </div>
      </section>

      <section className="latest">
        <h2 className="text-2xl md:text-3xl font-bold">Latest Article</h2>

        {posts.map((post, idx) => (
          <div key={idx} className="my-10">
            <PostCard
              slug={post.slug}
              title={post.frontmatterData.title}
              excerpt={post.frontmatterData.excerpt}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export async function getStaticProps() {
  const blogPostFiles = fs.readdirSync(path.join("posts"));

  const posts = blogPostFiles.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownData = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatterData } = matter(markdownData);

    return { slug, frontmatterData };
  });

  return {
    props: {
      posts: posts,
    },
  };
}

export default Home;
