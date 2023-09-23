import { client } from "@/sanity/lib/client"
const textcard1 = async ()=>{
    let response = await client.fetch(
      `*[_type == 'textcard']`,
      {},
      {
        cache : "no-cache",
      }
      )
  
    //   console.log(`response` , response)
      return response
  }
export default async function TextCard() {
    let textcard = await textcard1 () 
    return (
        <>
        <div className=" grid  grid-cols-1 sm:grid-cols-3 gap-4" >
        {textcard.map((e,i)=>{
            return(
                <div className="course-col" key={i}>
                <h3>{e.textcard1}</h3>
                <p>
                    {e.textcarddes}
                </p>
            </div>
            )
        })}
        </div>
        </>
    )
}
