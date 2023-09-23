// import Image from "next/image"

// export default function ImageCard(props) {
//     return (
//         <div class="facilities-col">
//             <Image width={550} height={250} src={props.source} alt="" />
//             <h3>{props.title}</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
//             </p>
//         </div>
//     )
// }
import React from 'react'
import Image from 'next/image'
import { urlForImage } from "@/sanity/lib/image"
import { client } from '@/sanity/lib/client'
const sportImage1 = async ()=>{
  let response = await client.fetch(
    `*[_type == 'sportImage']`,
    {},
    {
      cache : "no-cache",
    }
    )

    // console.log(`response` , response)
    return response
}

export default async function MainImages() {
  let sportImage = await sportImage1();
  // console.log('post', post);
return (
  <>
  <div className=" grid  grid-cols-1 sm:grid-cols-3 gap-4" >
  {sportImage.map((e)=>{
      return(
          <div class="facilities-col">
        <img className=""   src={urlForImage(e.mainImage).url()} alt=""
                 style={{width : '500px'}}   /> 
            <h3>{e.title}</h3>
            <p>{e.body}
            </p>
    </div>
      )
  })}
  </div>
  </>
)
}