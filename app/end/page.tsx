"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
export default function End() {
  <Breadcrumb
        
  pageName="Select"
  description="How would you like to get into contact?"
  

/>
  const tabs = [
    {
      title: "Product",
      value: "product",

      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 z-50">
          <p>Product Tab</p>
          <Contact />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[70rem] md:h-[60rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 z-50 ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/next.svg"
      alt="dummy image"
      width="100"
      height="100"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
