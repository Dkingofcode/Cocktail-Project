import React from 'react'
import Cocktail from './Cocktail';
import Loading from './Loading'
import { useGlobalContext } from '../context';


const CocktailList = () => {
    const { cocktails, loading } = useGlobalContext()

    if (loading) {
        return <Loading />
    }

    if(cocktails.length < 1){
        return <h1>No products matched your search</h1>
    }

  return (
    <div>CocktailList</div>
  )
}

export default CocktailList;