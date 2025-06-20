import React from 'react';
import NewsLayout from '../components/NewsLayout';
import NewsCard from '../components/NewsCard';
import { mockNews } from '../data/mockNews';

const News: React.FC = () => {
  // Main story is the first, next two are supporting
  const mainStory = mockNews[0];
  const supportingStories = mockNews.slice(1, 3);

  return (
    <NewsLayout>
      <section className="w-full space-y-6">
        <div className="border-b pb-4 mb-4">
          <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mb-2">MAIN STORY</span>
          <NewsCard news={mainStory} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportingStories.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>
    </NewsLayout>
  );
};

export default News;