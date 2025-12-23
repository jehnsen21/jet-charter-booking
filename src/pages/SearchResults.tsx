import React, { useState } from 'react';
import { Filter, SlidersHorizontal, Users, Navigation, Clock, Star } from 'lucide-react';

const SearchResults = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    aircraftType: '',
    minSeats: '',
    maxPrice: '',
    amenities: []
  });

  const aircraft = [
    {
      id: 1,
      name: 'Gulfstream G650',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 14,
      range: '7,000 nm',
      speed: '610 mph',
      price: 8500,
      rating: 4.9,
      amenities: ['Wi-Fi', 'Full Kitchen', 'Private Bedroom', 'Entertainment System'],
      operator: 'Elite Aviation',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Bombardier Global 7500',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 19,
      range: '7,700 nm',
      speed: '590 mph',
      price: 9200,
      rating: 4.8,
      amenities: ['Master Suite', 'Conference Room', 'Full Bar', 'Wi-Fi'],
      operator: 'Luxury Jets Inc',
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Citation X+',
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 8,
      range: '3,460 nm',
      speed: '717 mph',
      price: 4200,
      rating: 4.7,
      amenities: ['High Speed', 'Luxury Seating', 'Entertainment System', 'Wi-Fi'],
      operator: 'Sky Connect',
      availability: 'Limited'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Search Results</h1>
            <p className="text-gray-600 mt-2">{aircraft.length} aircraft available for your route</p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-white px-4 py-2 rounded-lg border border-gray-200 flex items-center space-x-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>

              {/* Aircraft Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aircraft Type
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400">
                  <option value="">All Types</option>
                  <option value="light">Light Jet</option>
                  <option value="mid">Midsize Jet</option>
                  <option value="heavy">Heavy Jet</option>
                  <option value="ultra">Ultra Long Range</option>
                </select>
              </div>

              {/* Minimum Seats */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Seats
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400">
                  <option value="">Any</option>
                  <option value="4">4+</option>
                  <option value="8">8+</option>
                  <option value="12">12+</option>
                  <option value="16">16+</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Price per Hour
                </label>
                <input
                  type="range"
                  min="2000"
                  max="15000"
                  step="500"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$2,000</span>
                  <span>$15,000</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amenities
                </label>
                <div className="space-y-2">
                  {['Wi-Fi', 'Full Kitchen', 'Private Bedroom', 'Conference Room', 'Entertainment System'].map((amenity) => (
                    <label key={amenity} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-yellow-400 text-slate-900 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {aircraft.map((plane) => (
                <div key={plane.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* Image */}
                    <div className="md:col-span-1">
                      <img
                        src={plane.image}
                        alt={plane.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">{plane.name}</h3>
                          <p className="text-gray-600">Operated by {plane.operator}</p>
                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">{plane.rating}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-slate-900">${plane.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">per hour</div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                            plane.availability === 'Available' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {plane.availability}
                          </div>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{plane.capacity} seats</span>
                        </div>
                        <div className="flex items-center">
                          <Navigation className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{plane.range}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{plane.speed}</span>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {plane.amenities.slice(0, 4).map((amenity, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                            >
                              {amenity}
                            </span>
                          ))}
                          {plane.amenities.length > 4 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                              +{plane.amenities.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-4">
                        <button className="flex-1 bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors font-medium">
                          View Details
                        </button>
                        <button className="flex-1 bg-yellow-400 text-slate-900 py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors font-medium">
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg font-medium">1</button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;