import Link from "next/link";
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav((prev) => !prev);

  let navclasses;
  if (nav) {
    navclasses =
      "md:hidden absolute left-0  text-xl bg-mainbg w-full h-[calc(100vh-80px)] flex justify-center flex-col align-middle px-8 py-10 ";
  } else {
    navclasses =
      "hidden md:hidden absolute left-0  text-xl bg-mainbg w-full h-[calc(100vh-80px)] flex justify-center flex-col align-middle px-8 py-10 ";
  }
  return (
    <header className=" h-[80px] z-10 text-white bg-mainbg  relative md:p-9 p-4">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <h1 className="text-2xl font-headingFont font-bold mr-4 sm:text-3xl">
          <Link href="/">EverythingCS</Link>
        </h1>

        <nav className="hidden md:flex md:text-xl ">
          <ul className="hidden md:flex md:mr-10 text-xl navbar-list">
            <li className="p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-4">
              <Link href="/about">About</Link>
            </li>
          </ul>

          {/* <div className="hidden md:flex md:pr-4 items-center">
            <div className="navbar-cta ">
              <span>
                <Link href="/about">About</Link>
              </span>
            </div>
          </div> */}
        </nav>

        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {!nav ? <HiMenu className="" size={30} /> : <HiX size={30} />}
        </div>
      </div>

      {nav && (
        // <ul className="md:hidden absolute left-0  text-xl bg-mainbg w-full h-[100vh] flex justify-center flex-col align-middle px-8 py-10 ">
        <ul className={navclasses}>
          <li className="text-center py-2" onClick={handleClick}>
            <Link href="/">Home</Link>
          </li>
          <li className="text-center py-2" onClick={handleClick}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-center py-2" onClick={handleClick}>
            <Link href="/about">About</Link>
          </li>
          {/* <div className="flex flex-col items-center my-4">
            <div className="bg-transparent px-8  mb-4">
              <span  onClick={handleClick}>
                <Link href="/about">About</Link>
              </span>
            </div>
          </div> */}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
