import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Video 1",
    paragraph:
      "The above video has collected more than 100K views on youtube and the views are increasing as we speak.Tapas Media is responsible for creating this catchy thumbnail, editing this video and doing the SEO for this video. ",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["100K+"],
    publishDate: "2025",
  },
  {
    id: 2,
    title:"Video 2",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["50k+"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Video 3",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["30k+"],
    publishDate: "2025",
  },
];
export default blogData;
