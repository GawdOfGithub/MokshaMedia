import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate,path } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        
        <Link href="/" className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <a 
              href= {path} target="blank"
              className="mb-4 block text-xl font-bold text-black hover:text-body-color dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </a>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
