import React from 'react';
import TopBar from '../components/TopBar';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopBar />
      <HeaderBar />
      <main className="flex-1 max-w-6xl mx-auto pl-2 pr-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Balitabytes</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Balitabytes is your AI powered news information platofrm, 
              dedicated to bringing you the latest news, insights, and stories from 
              around the country summarized by AI.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide accurate, timely, and engaging news content that empowers 
                  our readers to stay informed about the rapidly evolving digital landscape 
                  and its impact on society.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To become the most trusted source of digital news and insights in 
                  Southeast Asia, connecting people with the stories that matter most.
                </p>
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Cover</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Technology</h3>
                  <p className="text-sm text-gray-600">Latest tech trends, startups, and digital innovations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Business</h3>
                  <p className="text-sm text-gray-600">Market insights, entrepreneurship, and economic trends</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Breakthrough ideas and transformative technologies</p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">Jl. Sunset Road No. 123<br />Kuta, Bali 80361<br />Indonesia</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
                  <p className="text-gray-600">
                    Email: hello@balitabytes.com<br />
                    Phone: +62 361 123 456<br />
                    Hours: Mon-Fri 9AM-6PM WITA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;