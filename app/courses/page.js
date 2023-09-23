// import "./coursesStyle.css"
import '@/styles/pages/course.css'
import Header from '../(components)/header/header'
import TextCard from './(components)/textCard'
import CourseCard from './(components)/courseCard'
import { client } from '@/sanity/lib/client'
import MainHeading from '../(components)/mainHeading/mainHeading'
import Navbar from '../(components)/navbar/navbar'

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
async function Courses() {
  let heading = await heading1() 
  let navName = await navName1();

  return (
    <>
      {navName.map((e,i)=>{
    return(
      <>
      {e._id == 'e066423f-6862-47ef-9e3c-cf512f050054' && (
        <section  className="Sub-header">
        <Navbar/>
        <h1>{e.navName}</h1>
        </section>
      )}
      </>
      )
  })}
    {heading.map((e,i)=>{
      return(
        <div key={i} id={`${e.heading1[0]}`} >
          {e._id === '5c1fb28b-b064-4388-a442-ad8b93498867' && (
            <MainHeading title1={e.heading1} title2={e.heading2} title3={e.headingdes} />
          )}
        </div>
      )
    })}

      <section className="course">

        <div className="row">
          <TextCard  />
        </div>
      </section>

      <section class="facilities">
      {heading.map((e,i)=>{
      return(
        <div key={i} id={`${e.heading1[0]}`} >
          {e._id === '9ebce08e-8c6e-43bb-a994-1a632e6715ba' && (
            <MainHeading title1={e.heading1} title2={e.heading2} title3={e.headingdes} />
          )}
        </div>
      )
    })}

        <div class="row">
          <CourseCard/>

        </div>
      </section>



    </>
  )
}
export default Courses