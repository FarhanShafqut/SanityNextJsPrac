
// export default function Footer() {
//   return (
//     <section className="footer">
//         <hr />
//         <h4>About Us</h4>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
//             Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
//         </p>

//         <div className="icons">
//             <i className="fab fa-facebook-f"></i>
//             <i className="fab fa-instagram"></i>
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-linkedin"></i>
//         </div>
//         <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Developer</a></p>
//         <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
//     </section>
//   )
// }
import React from 'react'
import Image from 'next/image'
import { urlForImage } from "@/sanity/lib/image"
import { client } from '@/sanity/lib/client'
const fotter1 = async ()=>{
  let response = await client.fetch(
    `*[_type == 'fotter']`,
    {},
    {
      cache : "no-cache",
    }
    )

    // console.log(`response` , response)
    return response
}



export default async function Footer() {
  let fotter = await fotter1();
return (
  <>
  {/* <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-4" > */}
  {fotter.map((e ,i)=>{
    return(     
            <section className="footer" key={i}>
            <hr />
            <h4>{e.fotter}</h4>
            <p>{e.body}
            </p>
    
            <div className="icons">
                {/* <i className="fab fa-facebook-f"></i> */}
                <i className={e.fotter2}></i>
                <i className={e.fotter3}></i>
                {/* <i className="fab fa-instagram"></i> */}
                <i className={e.fotter4}></i>
                {/* <i className="fab fa-twitter"></i> */}
                <i className={e.fotter5}></i>
                {/* <i className="fab fa-linkedin"></i> */}
            </div>
            <p>Made With <i className="fas fa-heart"></i> by <a href="index.html">{e.fotter6}</a></p>
            {/* <p>Copyright © 2021 Xplore Skill. All Rights Reserved</p> */}
            <p>{e.fotter2}</p>
        </section>
  )

  })}
  {/* </div> */}
  </>
)
}