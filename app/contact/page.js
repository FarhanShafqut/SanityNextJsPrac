import Button from "../(components)/multibutton/multibutton";
import Header from "../(components)/header/header";
import Input from "../(components)/input/input";
import { client } from "@/sanity/lib/client";
import Navbar from "../(components)/navbar/navbar";
let contact1 = async ()=>{
  let response = await client.fetch(
      `*[_type == 'contact']`,
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

export default async function Contact() {
  let contact = await contact1();
  let navName = await navName1();
  return (
    <>
      {navName.map((e,i)=>{
    return(
      <>
      {e._id == '742da083-9ca0-4744-96e3-396c973f325c' && (
        <section  className="Sub-header">
        <Navbar/>
        <h1>{e.navName}</h1>
        </section>
      )}
      </>
      )
  })}
      <section  className="loacation">
        {contact.map((e)=>{
          return(
            <>
            {e._id == '464ce9d2-18d0-4130-b038-c2398771ff34' && (
<iframe
  src={e.contact1}
  width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            )}
            </>
          )
        })}
      </section>


      <section className="contact-us">
        <div className="row">
          <div className="content-col">
            {contact.map((e)=>{
              return(
                <>
            <div>
              <i className={e.contact2}></i>
              {/* <i className="fa fa-home"></i> */}
              <span>
                <h5>{e.contact3}</h5>
                <p>{e.contact4}</p>
              </span>
              </div>
            </>
          )
        })}
          </div>
          <div className="content-col">
            <form>
              <Input type="text" place="Enter Name" />
              <Input type="email" place="Enter Email" />
              <Input type="text" place="Enter Subject"/>
              <textarea rows="8" placeholder="Message" required></textarea>

              <Button text="Send Message" />
              {/* <button type="submit" className="hero_btn btn">Send Message</button> */}
            </form>
          </div>
        </div>
      </section>

    </>
  )
}
