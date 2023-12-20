//use client
import React from 'react'
import Header from "./components/Header"
import Recommendations from "./components/Recommendations"
import HotItems from './components/HotItems'


export default function Home() {
  return (
    <main>
      <Header/>
      <Recommendations/>
      <HotItems/>
    </main>
  )
}
