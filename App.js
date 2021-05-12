import React from 'react';
import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import FeaturedNews from './app/components/FeaturedNews'
import BreakingNews from './app/components/BreakingNews'
import TechNews from './app/components/TechNews'
import FlatCard from './app/components/FlatCard'

import data from './fakeData'
import PoliticalNews from './app/components/PoliticalNews';

export default function App() {
  const breakingNews = data.filter(item => item.category === 'breaking-news')
  const techNews = data.filter(item => item.category === 'tech')
  const politicalNews = data.filter(item => item.category === 'political')

  return <Screen>
    <SearchBar />
     <FeaturedNews 
        item = {{ 
        id: '7',
        title: 'This is the title no seven.',
        desc:
        'Desc is the short form of description and this format is the actual same as our real database.',
        thumbnail: 'http://lorempixel.com/400/200/',
            }} />
      <TechNews data ={techNews} />
      <BreakingNews data ={breakingNews} />
   
      <PoliticalNews data={politicalNews}/>
  </Screen>;
}

