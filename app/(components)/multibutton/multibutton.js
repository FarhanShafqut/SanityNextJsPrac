import { client } from "@/sanity/lib/client";
const multibutton1 = async ()=>{
    let response = await client.fetch(
      `*[_type == 'multibutton']`,
      {},
      {
        cache : "no-cache",
      }
      )
  
      // console.log(`response` , response)
      return response
  }
  
export default async function Multibutton() {
    let multibutton = await multibutton1();
    return (
        <>
         {multibutton.map((e,i)=>{
    return(
        <button className="hero_btn btn">{e.title}</button>
      )
  })}
        </>
    )
}
