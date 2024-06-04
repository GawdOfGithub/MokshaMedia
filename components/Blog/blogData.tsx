import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Mystery Of Ravan Explained",
    paragraph:
      "Our creative strategy made this reel to accumulate more than 3 Million views on instagram and the numbers are still increasing as we speak.",
    image: "/raaz.jpeg",
    path:"https://www.instagram.com/reel/C1-_6WBoFEy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    author: {
      name: "Samuyl Joshi",
      image: "/raaz.jpeg",
      designation: "Graphic Designer",
    },
    tags: ["3M+ views"],
    publishDate: "2025",
  },
  {
    id: 2,
    title:"Invocation of Divine Female",
    path:"https://youtu.be/XQSVn6egIaY?si=BetKs_F8Z4tWfUiR",
    
    paragraph:
      "Our creative strategy made this youtube video  to accumulate more than 100 thousand views on youtube  and the numbers are still increasing as we speak..",
    image: "/v2.jpeg",
    author: {
      name: "Musharof Chy",
      image: "/",
      designation: "Content Writer",
    },
    tags: ["100K+ views" ],
    publishDate: "2025",
  },
  {
    id: 3,
    path:"https://www.youtube.com/watch?v=O-mgYnl4mOE",
    title: "Invocation Of Lalita Maa",
    paragraph:
      "Our creative strategy made this youtube video  to accumulate more than 100 thousand views on youtube  and the numbers are still increasing as we speak.",
    image: "/v4.jpeg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["150k+ Views"],
    publishDate: "2025",
  },
];
export default blogData;
