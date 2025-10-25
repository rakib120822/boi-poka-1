import React from 'react'
import Banner from '../../components/banner/Banner'
import Books from '../books/Books'
import { useLoaderData } from 'react-router'

function Home() {
  const allBooks = useLoaderData();
  return (
    <div>
      <title> BoiPoke - Home</title>
      <div className='h-[300px] my-10'>
        <Banner/>
      </div>
      <Books allBooks={allBooks}/>
    </div>
  )
}

export default Home
