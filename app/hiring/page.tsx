
"use client"
import React, { useState } from 'react';
import { CreateEditor } from "@/app/actions/create-editor/schema";
import { useAction } from '@/components/Contact/hooks/use-action';
import { createEditor } from '../actions/create-editor';
import SubmitButton from '@/components/SubmitButton';
import { useToast } from '@/components/ui/toaster/use-toast';
const Hiring = () => {
  const {toast} = useToast()
  const handleSelectChange = (event) => {
    setEditingSoftware(event.target.value); 
  };
  const [editingSoftware, setEditingSoftware] = useState("");
  
  const { execute, fieldErrors } = useAction(createEditor, {
    onSuccess: (data) => {
      toast({
            
        title: "Your data reached our server",
        description: "We will be contacting you as soon as possible",
        
      })
    },
    onError: (error) => {
      // toast({
            
      //   title: "Something went wrong while submitting your data",
  
        
      // })p
      console.log(error);
    },
  });
  const onSubmit = (formData: FormData) => {

 
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const additionalSkills = formData.get("additionalSkills") as string;
    const  editingSoftware = formData.get("editingSoftware") as string;
    const  experience  = formData.get("experience") as string;
    const  folioLink  = formData.get("folioLink") as string;
    const  number = formData.get("number") as string;
    const  bestworkLink = formData.get("bestworkLink") as string;
    

    execute({
      name,
      email,
      additionalSkills,
      editingSoftware,
      experience,
      folioLink,
      number,
      bestworkLink,
    });
    
  };




  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                How would you like to communicate with us?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form action={onSubmit as unknown as string}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                       
                       
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                       
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="number" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Contact Number
                      </label>
                      <input
                        id="number"
                        name="number"
                        type="text"
                        placeholder="Enter your contact number"
                        
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="folioLink" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Portfolio Link
                      </label>
                      <input
                        id="folioLink"
                        name="folioLink"
                        type="text"
                        placeholder="Enter your portfolio link"
                      
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="experience" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Years of Video Editing Experience
                      </label>
                      <input
                        id="experience"
                        name="experience"
                        type="text"
                        placeholder="Enter your years of experience"
                      
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="editingSoftware" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Proficient Editing Software
                      </label>
                      <select
                        id="editingSoftware"
                        name="editingSoftware"
                        value={editingSoftware} // Bind value to state
                        onChange={handleSelectChange} // Handle select change
                        
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      >
                        <option value="">Select Editing Software</option>
                        <option value="Adobe Premiere Pro">Adobe Premiere Pro</option>
                        <option value="DaVinci Resolve">DaVinci Resolve</option>
                        <option value="Adobe After Effects">Adobe After Effects</option>
                        <option value="Other">Any Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="additionalSkills" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Additional Skills or Experiences
                      </label>
                      <textarea
                        id="additionalSkills"
                        name="additionalSkills"
                        rows={5}
                        placeholder="Enter additional skills or experiences"
                       
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="bestworkLink" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Link to Your Best Work
                      </label>
                      <input
                        id="bestworkLink"
                        name="bestworkLink"
                        type="text"
                        placeholder="Enter link to your best work"
                       
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <SubmitButton className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ml-24">
                      Submit
                    </SubmitButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
           
          </div>
        </div>
      </div>
    </section>
  );
};



export default Hiring