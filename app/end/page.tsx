"use client"
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tab"
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { useState } from "react";
import Contact from "@/components/Contact";
const End = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
  return (
    <>
      <Breadcrumb
        
        pageName="Select"
        description="How would you like to get into contact?"
        
    
      />
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    
   
    <div className="ml-[50px] mt-[40px] mb-[30px]">
    <TabsTrigger value="account">
      <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear mr-[10px]">
     Call
      </button>
      </TabsTrigger>

      <TabsTrigger value="Others">
      <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
    Others
      </button>
      </TabsTrigger>
    </div>
  </TabsList>
  <TabsContent value="account">  <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    /></TabsContent>
  <TabsContent value="Others"><Contact/></TabsContent>
</Tabs>

      

    </>
  );
};

export default End;
