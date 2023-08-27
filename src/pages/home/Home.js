import React, { Fragment } from 'react'
import Hero from '../../components/hero/Hero'
import Card from '../../components/cardHome/Card'
export default function Home() {
  return (
    <main className='w-full flex justify-center flex-col'>
      <Hero />
      <section className='w-full flex flex-col items-center justify-center py-14 px-10 min-h-screen'>
          <h1
        <div className="wrapper grid grid-cols-3 gap-5 max-xl: mx-auto">
          <Card num="640" />
          <Card num="630" />
          <Card num="650" />
        </div>
      </section>
    </main>
  )
}
