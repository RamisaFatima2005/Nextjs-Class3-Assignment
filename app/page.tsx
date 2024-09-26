//3th Class Assignment - 23rd September
//Create four route pages: Navbar, About, Contact, and Footer.
//Link all components together using the 'Link' component.
//Add navigation for all routes using buttons and useRouter.

"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import React from 'react'

export default function Homepage(){
  const route = useRouter();
  return (
    <>
      <h1>Home Page</h1>
      <h2>Linking</h2>
      <Link href="/about">Go to About Page</Link>
      <br/>
      <Link href="/footer">Go to Footer Page</Link>
      <br/>
      <Link href="/contact">Go to Contact Page</Link>
      <br/>
      <Link href="/navbar">Go to Navbar Page</Link>
      <br/>
      <br/>
      <h2>Navigation</h2>
      <button onClick={()=>route.push("/about")}>About</button>
      <button onClick={()=>route.push("/footer")}>Footer</button>
      <button onClick={()=>route.push("/contact")}>Contact</button>
      <button onClick={()=>route.push("/navbar")}>Navbar</button>
    </>

  )
}