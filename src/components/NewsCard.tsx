import React from 'react';
import { NewsItem } from '../services/newsService';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const formattedDate = new Date(news.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {news.image_url && (
        <div className="relative h-48 w-full">
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{news.title}</h2>
        <p className="text-gray-600 mb-4">{news.content}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 