import React from 'react'

const Home = () => {
  return (
    <div>
         <section className="featured">
           <h2 className="text-2xl md:text-3xl font-bold">
              Featured Article
            </h2>
         </section>

         <section className="latest mt-10">
         <h2 className="text-2xl md:text-3xl font-bold">
              Latest Blog Post
            </h2>
         </section>
    </div>
  )
}

export default Home