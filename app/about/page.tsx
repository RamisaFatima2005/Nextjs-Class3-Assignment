"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Aboutpage = () => {
  const route= useRouter();
  return (
    <>
    <h1>About Page</h1>
    <h2>Linking</h2>
    <Link href="/"><h1>Home Page</h1></Link>
    <Link href="/navbar"><h1>Navbar Page</h1></Link>
    <Link href="/footer"><h1>Footer Page</h1></Link>
    <Link href="/contact"><h1>Contact Page</h1></Link>
    <br/>
    <h2>Navigation</h2>
    <button onClick={()=>route.push("/")}>Home</button>
    <button onClick={()=>route.push("/navbar")}>Navbar</button>
      <button onClick={()=>route.push("/footer")}>Footer</button>
      <button onClick={()=>route.push("/contact")}>Contact</button>
    </>
  )
}

export default Aboutpage
