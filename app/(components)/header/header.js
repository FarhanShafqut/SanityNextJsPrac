import Navbar from "../navbar/navbar";
import { client } from "@/sanity/lib/client";
const navName1 = async ()=>{
    let response = await client.fetch(
      `*[_type == 'navName']`,
      {},
      {
        cache : "no-cache",
      }
      )
  
      console.log(`response` , response)
      return response
  }
export default async function Header(props) {
    // console.log("props", props.title);
    let navName = await navName1();
    return (
        <section  className="Sub-header">
            <Navbar/>
            {navName.map((e,i)=>{
    return(
        <h1 key={i} >{e.navName}</h1>
      )
  })}
        </section>
    )
}
