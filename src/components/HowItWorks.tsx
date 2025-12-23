import React from 'react';
import { Search, Calculator, Plane } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search',
      description: 'Browse our extensive fleet and find the perfect aircraft for your journey.',
      step: '01'
    },
    {
      icon: Calculator,
      title: 'Get Quote',
      description: 'Receive instant pricing with transparent breakdown of all costs.',
      step: '02'
    },
    {
      icon: Plane,
      title: 'Fly',
      description: 'Enjoy your luxurious flight with our premium service and amenities.',
      step: '03'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book your private jet in three simple steps. Our streamlined process 
            ensures you get airborne quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="bg-yellow-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                  <Icon className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;