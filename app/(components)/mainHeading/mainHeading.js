import React from 'react'


export default function MainHeading(props) {
  return (
    <div> <section class="course">
    <div class="PageBlock">
        <div class="verticalLine"></div>
        <div class="Clear"></div>
    </div>
    <h1>{props.title1} <br/>{props.title2}</h1>
    <p>{props.title3}</p>
</section>
</div>
  )
}
