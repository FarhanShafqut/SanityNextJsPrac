import { client } from '@/sanity/lib/client'
import React from 'react'
let coursecate1 = async ()=>{
let response = await client.fetch(
  `*[_type == 'coursecate' ]`,
  {},
  {
    cache : "no-cache",
  }
  )
  console.log(`response` , response)
  return response
}
export default async function SubjectButton() {
  let coursecate = await coursecate1();
  return (
    <>
    {coursecate.map((e,i)=>{
      return (
        <div key={i}>
        <span>{e.coursecate1}</span>
        <span>{e.coursecatedes}</span>
        </div>
       )
    })}
  </>
  )
}
