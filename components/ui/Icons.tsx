'use client'
import Image from "next/image"

export default function Icons() {
  return (
    <>
     <div className="flex flex-col  items-center justify-center gap-5 mt-10  " >
            
                   <Image
                     src="/insta1.jpeg"
                     alt=""
                     width={200}
                     height={100}
                     className=""
                   
                   />
                   
                    
                    
                     <Image
                     src="/facebook.jpeg"
                     alt=""
                     width={200}
                     height={100}
                     className=""  />
                    
                    
                     <Image
                     src="/twitter1.jpeg"
                     alt=""
                     width={200}
                     height={100}
                     className=""  
                     />
                      <Image
                     src="/linkedIn1.jpeg"
                     alt=""
                     width={200}
                     height={100}
                     className=""  
                     />
                    
                   </div>

                     
                 
            

    </>
    
  )




}

