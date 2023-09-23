// import React from 'react'

// export default function CommentStu(props) {
//   return (
//     <div class="testimonials-col">
//                 <img src={props.source} alt="oo.."/>
//                 <div>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
//                         praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
//                         deserunt. In quia repellat maxime.</p>
//                     <h3>Student Name</h3>

//                     <i class={props.i1}></i>
//                     <i class={props.i2}></i>
//                     <i class={props.i3}></i>
//                     <i class={props.i4}></i>
//                     <i class={props.i5}></i>
//                 </div>
//             </div>
//   )
// }
import React from 'react'
import Image from 'next/image'
import { urlForImage } from "@/sanity/lib/image"
import { client } from '@/sanity/lib/client'
const commentss1 = async ()=>{
  let response = await client.fetch(
    `*[_type == 'commentss']`,
    {},
    {
      cache : "no-cache",
    }
    )

    console.log(`response` , response)
    return response
}

export default async function CommentStu() {
  let commentss = await commentss1();
return (
  <>
  <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-4" >
  {commentss.map((e,i)=>{
    return(
      <div class="testimonials-col" key={i} >
   <img className="w-[10px]"   src={urlForImage(e.commentssImage).url()} alt="" /> 
                <div>
                    <p>{e.body}</p>
                    <h3>{e.title}</h3>
                    <i class={e.title1}></i>
                    <i class={e.title1}></i>
                    <i class={e.title1}></i>
                    <i class={e.title1}></i>
                    <i class={e.title2}></i>
                </div>
            </div>       
  )

  })}
  </div>
  </>
)
}