import React from 'react';
import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import BlockCard from './app/components/BlockCard';
import FeaturedNews from './app/components/FeaturedNews';
import SmallCard from './app/components/SmallCard';
import BreakingNews from './app/components/BreakingNews';

import data from './fakeData';

export default function App() {
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  return <Screen>
    <SearchBar />
    {/* <FeaturedNews /> */}
    <BreakingNews data={breakingNews} />
  </Screen>
}