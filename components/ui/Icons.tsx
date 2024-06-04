'use client'
import Image from "next/image"
import Link from "next/link"

export default function Icons() {
  return (
    <>
     <div className="flex flex-col  items-center justify-center gap-5 mt-10 mb-10" >
            <Link href="https://www.instagram.com/tapasmedia_21/" target="blank">
                   <Image
                     src="/insta1.jpeg"
                     alt=""
                     width={200}
                     height={100}
                     className=""
                   />
                   </Link>
                   
                    
                    
                    
                    
                    <Link href="https://x.com/media_tapas?t=YOIJuZz3oGx0aq7UTNZclA&s=08">
                     <Image
                     src="/twitter1.jpeg"
                     alt=""
                     width={200}
                     height={100}
                     className=""  
                     />
                     </Link>

                    
                   </div>

                     
                 
            

    </>
    
  )




}

