import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>EverythingCS</title>
        <meta
          name="description"
          content="Blog on Frontend Developement and many more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="welcome text-white bg-mainbg rounded-xl h-[300px] md:h-[250px] flex justify-center flex-col items-center px-5">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Welcome to EverythingCS
          </h2>
          <p className="mt-5 text-center text-[18px]">
            Hello, I am Jitendra. I mostly talk about frontend stuff like
            ReactJS, Next.js, Firebase and many others.
          </p>
        </div>

        <section className="featured-blog mt-5 md:mt-10">
          <div className="flex items-center gap-6 justify-between md:justify-start">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Post</h2>
            <Link href="/blog">
              <button className="px-5 py-3 rounded-lg border-none text-white bg-mainbg">
                View all posts
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
