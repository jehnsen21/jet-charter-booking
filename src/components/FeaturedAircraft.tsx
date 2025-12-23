import React from 'react';
import { Users, Navigation, Clock, ArrowRight } from 'lucide-react';

const FeaturedAircraft = () => {
  const aircraft = [
    {
      id: 1,
      name: 'Gulfstream G650',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: 14,
      range: '7,000 nm',
      speed: '610 mph',
      price: '$8,500/hr',
      features: ['Wi-Fi', 'Full Kitchen', 'Private Bedroom']
    },
    {
      id: 2,
      name: 'Bombardier Global 7500',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: 19,
      range: '7,700 nm',
      speed: '590 mph',
      price: '$9,200/hr',
      features: ['Master Suite', 'Conference Room', 'Full Bar']
    },
    {
      id: 3,
      name: 'Citation X+',
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: 8,
      range: '3,460 nm',
      speed: '717 mph',
      price: '$4,200/hr',
      features: ['High Speed', 'Luxury Seating', 'Entertainment System']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Aircraft
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium fleet of private jets, each offering unparalleled 
            luxury and performance for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aircraft.map((plane) => (
            <div
              key={plane.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={plane.image}
                  alt={plane.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full font-bold text-sm">
                    {plane.price}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{plane.name}</h3>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Capacity</div>
                    <div className="font-bold text-slate-900">{plane.capacity}</div>
                  </div>
                  <div className="text-center">
                    <Navigation className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Range</div>
                    <div className="font-bold text-slate-900">{plane.range}</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Speed</div>
                    <div className="font-bold text-slate-900">{plane.speed}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Features</div>
                  <div className="flex flex-wrap gap-2">
                    {plane.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium flex items-center justify-center space-x-2 group">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAircraft;