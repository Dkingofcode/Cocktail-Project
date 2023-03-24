import React from 'react'
import CocktailLIst from './components/CocktailList'
import SearchForm from '../components/Search'


const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home;