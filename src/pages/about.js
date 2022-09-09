import React from "react";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>About EverythingCS</title>
        <meta name="description" content="About EverythingCS" />
      </Head>

      <main>
        <h1 className="text-center text-3xl font-extrabold">About EverythingCS</h1>
        <div className="mt-5 text-center text-[18px]">
            <p>
              Hello, I am Jitendra. I mostly talk about frontend stuff like
              ReactJS, Next.js, Firebase and many others.
            </p>

            <p>I have started this blog to help my fellow frontend coder with the things I know. This is also giving me huge learning opportunity. </p>
          </div>
      </main>
    </div>
  );
};

export default about;
