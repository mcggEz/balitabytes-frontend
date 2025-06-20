import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/footer';

const Subscription: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 'Free',
      period: 'month',
      features: [
        'Access to all news articles',
        'Daily newsletter',
        'Ad-free reading',
        'Mobile app access'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$9.99',
      period: 'month',
      features: [
        'Everything in Basic',
        'Exclusive content',
        'Early access to articles',
        'Priority customer support',
        'Offline reading',
        'Custom news feed'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$49.99',
      period: 'month',
      features: [
        'Everything in Premium',
        'Team collaboration tools',
        'Analytics dashboard',
        'API access',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopBar />
      <HeaderBar />
      <main className="flex-1 max-w-6xl mx-auto pl-2 pr-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get unlimited access to our premium content and stay ahead with the latest 
            insights in technology, business, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-lg shadow-lg p-8 border-2 transition-all duration-300 ${
                selectedPlan === plan.id
                  ? 'border-blue-500 shadow-xl'
                  : 'border-gray-200 hover:border-gray-300'
              } ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time with no cancellation fees.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, we offer a 7-day free trial for all new subscribers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I change my plan?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscription;