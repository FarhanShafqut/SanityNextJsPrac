import React from 'react'
import Link from "next/link"

export default function MainButton(prop) {
  return (
    <div><Link href="#" class="hero_btn">{prop.txt}</Link></div>
  )
}
