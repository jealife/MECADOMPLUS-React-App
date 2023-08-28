// import React, { Fragment } from 'react'
import Hero from '../../components/hero/Hero'
import Card from '../../components/cardHome/Card'
import About from '../../components/about/About'


export default function Home() {
  return (
    <main className='w-full flex justify-center flex-col'>
      <Hero />
      <section className='w-full flex flex-col gap-10 items-center justify-center py-14 px-10 min-h-screen'>
        <h1 className='title text-3xl font-bold'>Ils repondent à  vos Besoins</h1>
        <div className="wrapper grid grid-cols-3 gap-5  mx-auto md:grid-cols-2 sm:grid-cols-1">
          <Card num="640" />
          <Card num="630" />
          <Card num="650" />
        </div>
      </section>
      <About />
    </main>
  )
}
