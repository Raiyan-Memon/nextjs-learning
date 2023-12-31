'use client';

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import Router from 'next/router'
import { useState, useEffect } from 'react';
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Raiyan Project',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", (url)=>{
      NProgress.done();
    });

    Router.events.on("routeChangeError", (url) =>{
      NProgress.done();
    });
  }, [Router])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <span className='text-dark'><Link href="/login">Go To Login</Link> </span>
        <Link href="/signup">Go To Sign Up</Link>
         */}


      </body>
    </html>
  )
}
