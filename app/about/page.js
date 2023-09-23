import Image from 'next/image'
import Button from '../(components)/multibutton/multibutton'
import Header from '../(components)/header/header'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Navbar from '../(components)/navbar/navbar'

let about1 = async ()=>{
    let response = await client.fetch(
        `*[_type == 'about']`,
        {},
        {
            cache: "no-cache",
        }
        )
        // console.log(`response`, response)
        return response

}
const navName1 = async ()=>{
  let response = await client.fetch(
    `*[_type == 'navName']`,
    {},
    {
      cache : "no-cache",
    }
    )

    // console.log(`response` , response)
    return response
}
export default async function About() {
  let navName = await navName1();
  let about = await about1();
  return (
    <>
     {navName.map((e,i)=>{
    return(
      <>
      {e._id == 'c1c7e656-c5fd-41e5-8d03-4b34a2cd5579' && (
        <section  className="Sub-header">
        <Navbar/>
        <h1>{e.navName}</h1>
        </section>
      )}
      </>
      )
  })}
    <section className="about-us">
      <div className="row">
    {about.map((e,i)=>{
      return (
        <div className=" grid grid-cols-1 sm:grid-cols-2">         
        <div key={i}>
        <h1>{e.about1}</h1>
        <p>{e.about2}</p>
       <Button/>
        </div>
        <div className="about-col">
        <img  src={urlForImage(e.aboutimg).url()} alt=""
                    /> 
        </div>
        </div>
       )
    })}
      </div>
    </section>
    </>
  )
}
