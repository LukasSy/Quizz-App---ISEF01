"use client";
import "./globals.css";
import React,{Suspense} from "react";
import { useRouter } from "next/navigation";
import BurgerMenu from "@/components/BurgerMenu";
import Avatar from "@/components/Avatar";

export default function RootLayout({ children }) {
    const router = useRouter();

  return (
      <html lang="en">
      <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="theme-color" content="black"/>
          <link rel="manifest" href="/manifest.json"/>
          <title>Quiz</title>
      </head>
      <body>
      <Suspense fallback={<div>Loading...</div>}>
          {children}
      </Suspense>
      <BurgerMenu />
      <Avatar/>


      </body>
      </html>
  );
}

