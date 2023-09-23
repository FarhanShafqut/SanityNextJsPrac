// import Link from "next/link";
// import Navbar from "./(components)/navbar/navbar";
// import MainButton from "./(components)/mainButton/mainButton";
// import MainHeading from "./(components)/mainHeading/mainHeading";
// import TextCard from "./courses/(components)/textCard";
// import MainImages from "./(components)/mainImages/MainImages";
// import ImageCard from "./courses/(components)/imageCard";
// import CommentStu from "./(components)/commentStu/page";
// import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";

// const data = async () => {
//   let response = await client.fetch(
//     // `*[_type == 'header' || _type == 'post']`,
//     `*[_type in ['header', 'post']]`,
//     {},
//     {
//       cache: "no-cache",
//     }
//   );

//   // console.log("response", response);
//   console.log('Headers:', response.filter((item) => item._type === 'header'));
//   return response;
// };

// async function Home() {
//   let response = await data();

//   return (
//     <>
//       {response.map((e, i) => (
//         <div key={i}>
//           <section className="header">
//             <Navbar />
//             {e._type === "header" && (
//               <>
//                 <h1>{e.header1}</h1>
//                 <p>{e.header2}</p>
//                 {/* Render other 'header' properties as needed */}
//               </>
//             )}
//             {e._type === "post" && (
//               <>
//                 <h1>{e.title}</h1>
//                 <img
//                   className="w-[10px]"
//                   src={urlForImage(e.mainImage.asset._ref)
//                     .auto("format")
//                     .fit("max")
//                     .url()}
//                   alt=""
//                   style={{ width: "200px" }}
//                 />
//               </>
//             )}
//             <div className="text_box">
//               <h2>GET READY</h2>
//               <p id="headtext">TO DISCOVER CAMPUS</p>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing eLinkt.
//                 VeLinkt consequuntur corrupti sapiente aut porro
//                 <br /> esse blanditiis in quae perspiciatis quo.
//               </p>
//               <MainButton txt={"Visit To Know More"} />
//             </div>
//           </section>
//           <MainHeading title1="EXPLORE OUR 60+" title2="MAJOR PROGRAMS" />
//           <section className="course">
//             <div className="row">
//               <TextCard title="Undergraduate Programs" />
//               <TextCard title="Graduate Programs" />
//               <TextCard title="Adult Learning & Degree Completion" />
//             </div>
//             <MainHeading title1="TAKE OUR VIRTUAL TOUR" />
//             <div className="row">
//               <MainImages surc={"/img/Campus1.png"} title="Web Development" />
//               <MainImages surc={"/img/Campus2.png"} title="Artificial Intelligence" />
//               <MainImages surc={"/img/Campus3.png"} title="Data Science" />
//             </div>
//             <MainHeading title1="OUR FACILITIES" />
//             <div className="row">
//               <ImageCard source={"/img/libary.png"} title={"Best Library"} />
//               <ImageCard source={"/img/playground.png"} title={"Athletics"} />
//               <ImageCard source={"/img/food.png"} title={"Tasty and Healthy Food"} />
//             </div>
//             <MainHeading title1="WHAT OUR STUDENT SAYS" />
//             <div className="row">
//               <CommentStu source={"/img/user.png"} i1={"fa fa-star"} i2={"fa fa-star"} i3={"fa fa-star"} i4={"fa fa-star"} i5={"fa fa-star"} />
//               <CommentStu source={"/img/user.png"} i1={"fa fa-star"} i2={"fa fa-star"} i3={"fa fa-star"} i4={"fa fa-star"} i5={"fa fa-star-half-alt"} />
//             </div>
//             <section className="cta">
//               <h1>GET READY FOR A BRIGHT FUTURE</h1>
//               <MainButton txt={"CONTACT US"} />
//             </section>
//           </section>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Home;

{/* <img
                      className="w-[10px]"
                      src={urlForImage(e.mainImage.asset._ref).auto('format').fit('max').url()}
                      alt=""
                      style={{ width: '200px' }}
                    /> */}

import Link from "next/link"
import Navbar from "./(components)/navbar/navbar"
import MainButton from "./(components)/mainButton/mainButton"
import MainHeading from "./(components)/mainHeading/mainHeading"
import TextCard from "./courses/(components)/textCard"
import MainImages from "./(components)/mainImages/MainImages"
import ImageCard from "./courses/(components)/imageCard"
import CommentStu from "./(components)/commentStu/page"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import textcard from "@/sanity/schemas/textcard"
const data = async ()=>{
  let response = await client.fetch(
    `*[_type == 'header']`,
    {},
    {
      cache : "no-cache",
    }
    )

    // console.log(`response` , response)
    return response
}
const homeFotterImage1 = async ()=>{
  let response = await client.fetch(
    `*[_type == 'homeFotterImage']`,
    {},
    {
      cache : "no-cache",
    }
    )

    // console.log(`response` , response)
    return response
}
const  heading1 = async ()=>{
  let response = await client.fetch(
    `*[_type == 'headings' ]`,
    {},
    {
      cache : "no-cache",
    }
    )

    // console.log(`response` , response)
    return response
}

async function Home (){
  let response = await data () ;
  let heading = await heading1 () ;
  let homeFotterImage = await homeFotterImage1 () ;
return(
  <div>  
  {response.map((e)=>{
    return (
      <>
            <section class="header">
          <Navbar/>
            <div class="text_box">        
            <h2>{e.header1}</h2>
            <p id="headtext">{e.header2}</p>
            <p  >{e.headerdes}
            </p>
            <MainButton txt={e.btt}/>
        </div>
    </section>
        </>
      )
    })}
    
    {heading.map((e,i)=>{
      return(
        <div key={i} id={`${e.heading1[0]}`} >
          {e._id === 'a23db4a4-2ffe-4289-943d-e9e830f83e3a' && (
            <MainHeading title1={e.heading1} title2={e.heading2} title3={e.headingdes} />
          )}
        </div>
      )
    })}
        <section className="course">
          <TextCard />
          {heading.map((e,i)=>{
      return(
        <div key={i}  >
          {e._id === 'dbd06ff9-4d0e-4250-b5a6-8dbb4e6a1be3' && (
            <MainHeading title1={e.heading1} title2={e.heading2} title3={e.headingdes} />
          )}
        </div>
      )
    })}
        <div className="row">
         
          <MainImages/>
        </div>
          {heading.map((e,i)=>{
      return(
        <div key={i} >
          {e._id === 'e8dd4a53-d947-4f6e-b7ad-9ae500a8156b' && (
            <MainHeading title1={e.heading1} title2={e.heading2} title3={e.headingdes} />
          )}
        </div>
      )
    })}
        <div className="row">
          <ImageCard  />
        </div>
        {heading.map((e,i)=>{
      return(
        <div key={i} >
          {e._id ==='d0acc1bc-5c48-4177-9507-907e24211d0f' && (
            <MainHeading title1={e.heading1} title2={e.heading2} title3={e.headingdes} />
          )}
        </div>
      )
    })}
        {/* <MainHeading title1='WHAT OUR STUDENT SAYS' /> */}
        <div className="row">
        <CommentStu i1={'fa fa-star'} i2={'fa fa-star'} i3={'fa fa-star'} i4={'fa fa-star'} i5={'fa fa-star'}/>
        {/* <CommentStu  i1={'fa fa-star'} i2={'fa fa-star'} i3={'fa fa-star'} i4={'fa fa-star'} i5={'fa fa-star-half-alt'}/> */}
        </div>
        {homeFotterImage.map((e,i)=>{
      return(
        <div key={i} >
        <section className="cta">
        <h1 className="text-9xl" >{e.homeFotterImage}</h1>
        <MainButton txt={e.homeFotterImage2}/>
    </section>
        </div>
      )
    })}
        </section>
{/*         
    <MainHeading title1='EXPLORE OUR 60+' title2='MAJOR PROGRAMS' />
    <section className="course">
    <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
        <MainHeading title1='TAKE OUR VIRTUAL TOUR' />
        <div className="row">
          <MainImages surc={"/img/Campus1.png"} title="Web Development" />
          <MainImages surc={"/img/Campus2.png"} title="Artificial Intelligence" />
          <MainImages surc={"/img/Campus3.png"} title="Data Science" />
        </div>
        <MainHeading title1='OUR FACILITIES' />
        <div className="row">
          <ImageCard source={"/img/libary.png"} title={"Best Libary"} />
          <ImageCard source={"/img/playground.png"} title={'Athletics'} />
          <ImageCard source={"/img/food.png" }title={"Tasty and Healthy Food"} />
        </div>
        <MainHeading title1='WHAT OUR STUDENT SAYS' />
        <div className="row">
        <CommentStu source={'/img/user.png'} i1={'fa fa-star'} i2={'fa fa-star'} i3={'fa fa-star'} i4={'fa fa-star'} i5={'fa fa-star'}/>
        <CommentStu source={'/img/user.png'} i1={'fa fa-star'} i2={'fa fa-star'} i3={'fa fa-star'} i4={'fa fa-star'} i5={'fa fa-star-half-alt'}/>
        </div>
        <section className="cta">
        <h1 className="text-9xl" >GET READY FOR A BRIGHT FUTURE</h1>
        <MainButton txt={'CONTACT US'}/>
    </section>
        </section> */}
  </div>
)
}
export default Home

