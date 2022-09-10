import Link from "next/link";
const Footer = () => {
  return (

      <footer className="bg-mainbg w-full h-[80px] flex items-center text-white p-6 md:p-9 md:px-11 mt-auto">
        <p className="w-full text-center">
          &copy;2022 <Link href="/">EverythingCS</Link>
        </p>
      </footer>
   
  );
};

export default Footer;
