import React, {useState, useEffect} from 'react';
import newsApi from './app/api/newApi'

import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import FeaturedNews from './app/components/FeaturedNews'
import BreakingNews from './app/components/BreakingNews'
import PoliticalNews from './app/components/PoliticalNews'


export default function App() {
  const [featuredNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);

  const filterFeatured = (data) => {
    console.log([...data].filter(item => item.featured ==='on').reverse()[0])
    return [...data].filter(item => item.featured ==='on').reverse()[0];
  }
  const filterByCategory = (data,category) => {
    return [...data].filter(item => item.category === category);
  }

  const filterMultipleNews = async() =>{
    const allNews = await newsApi.getAll();

    setFeaturedNews(filterFeatured(allNews));
    setBreakingNews(filterByCategory(allNews,'breaking-news'));
    setPoliticalNews(filterByCategory(allNews,'political'));

  }


  useEffect(() => {
    filterMultipleNews();
  },[]);



  return (
    <Screen>
      <SearchBar/>
       
    </Screen>
  
  )

}

