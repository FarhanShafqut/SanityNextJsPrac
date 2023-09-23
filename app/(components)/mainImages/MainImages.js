import React from 'react'
import Image from 'next/image'
import { urlForImage } from "@/sanity/lib/image"
import { client } from '@/sanity/lib/client'
const post1 = async ()=>{
  let response = await client.fetch(
    `*[_type == 'post']`,
    {},
    {
      cache : "no-cache",
    }
    )

    // console.log(`response` , response)
    return response
}

export default async function MainImages() {
  let post = await post1();
  // console.log('post', post);
return (
  <>
  <div className=" grid  grid-cols-1 sm:grid-cols-3 gap-4" >
  {post.map((e,i)=>{
    return(
        <div class="campus-col" key={i}>
        <img className="w-[10px]"   src={urlForImage(e.mainImage).url()} alt=""
                    /> 
        <div class="layer">
            <h3>{e.title}</h3>
        </div>
    </div>
      )
  })}
  </div>
  </>
)
}