import Button from "../(components)/multibutton/multibutton";
import Header from "../(components)/header/header";
import Input from "../(components)/input/input";
import SubjectButton from "../(components)/subjectsButton/page";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Multibutton from "../(components)/multibutton/multibutton";
import Navbar from "../(components)/navbar/navbar";

let blog1 = async ()=>{
    let response = await client.fetch(
        `*[_type == 'blog']`,
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
  
    //   console.log(`response` , response)
      return response
  }
async function Blog(){
    let blog = await blog1()
    let navName = await navName1();
    return(
      <>
        {navName.map((e,i)=>{
    return(
      <>
      {e._id == '2b8bd217-0cb6-4237-bf13-8569f2b9990d' && (
        <section  className="Sub-header">
        <Navbar/>
        <h1>{e.navName}</h1>
        </section>
      )}
      </>
      )
  })}
      <div>
      <section class="blog-content">
        <div class="row">
            <div class="blog-left">
                {blog.map((e,i)=>{
                    return(
                        <div key={i}>
                        <h2>{e.blog1}</h2>
                        <h5>{e.blog2}</h5>
                        <img   src={urlForImage(e.blogImg).url()} alt=""/>
                        <br/>
                        <p>{e.blog3}</p>
                        <br/>
                        <p>{e.blog4}</p>
                        <br/>
                        <p>{e.blog5}</p>
                        </div>
                    )
                })}
                {/* <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p> */}

                <div class="comment-box">
                    <h3>Leave a Comment</h3>
                    <form class="comment-form">
                        <Input type="text" place="Enter Name" />
                        <Input type="email" place="Enter Email" />
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <Multibutton/>
                    </form>
                </div>
            </div>

            <div class="blog-right">
                <h3>Post Categories</h3>
                <SubjectButton/>

            </div>
        </div>
    </section>
      </div>
      </>
    )
    }
    export default Blog;