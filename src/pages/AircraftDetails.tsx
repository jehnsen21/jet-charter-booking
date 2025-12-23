import React, { useState } from 'react';
import { ArrowLeft, Users, Navigation, Clock, Star, Wifi, Coffee, Bed, Monitor, Shield } from 'lucide-react';

const AircraftDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const amenities = [
    { icon: Wifi, name: 'High-Speed Wi-Fi', available: true },
    { icon: Coffee, name: 'Full Kitchen', available: true },
    { icon: Bed, name: 'Private Bedroom', available: true },
    { icon: Monitor, name: 'Entertainment System', available: true },
    { icon: Shield, name: 'Medical Kit', available: true }
  ];

  const specifications = {
    'Max Passengers': '14',
    'Max Range': '7,000 nm',
    'Max Speed': '610 mph',
    'Cabin Height': '6\'2"',
    'Cabin Width': '8\'2"',
    'Cabin Length': '46\'10"',
    'Baggage Capacity': '195 cu ft',
    'Fuel Capacity': '44,200 lbs'
  };

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button className="flex items-center space-x-2 text-gray-600 hover:text-slate-900 mb-8">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Results</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-8">
              <div className="relative">
                <img
                  src={images[currentImage]}
                  alt="Aircraft"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImage ? 'bg-yellow-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Aircraft Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 mb-2">Gulfstream G650</h1>
                  <p className="text-gray-600 mb-4">Operated by Elite Aviation</p>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium mr-2">4.9</span>
                    <span className="text-gray-600">(127 reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-slate-900">$8,500</div>
                  <div className="text-gray-600">per hour</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">14</div>
                  <div className="text-gray-600">Passengers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Navigation className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">7,000</div>
                  <div className="text-gray-600">Nautical Miles</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">610</div>
                  <div className="text-gray-600">MPH</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-8">
                  {['overview', 'specs', 'amenities', 'availability'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-yellow-400 text-yellow-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Aircraft Overview</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Gulfstream G650 represents the pinnacle of private aviation, combining exceptional 
                      range, speed, and luxury. With its spacious cabin and advanced technology, it's perfect 
                      for long-range international flights while maintaining the highest standards of comfort and safety.
                    </p>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Ultra-long-range capability for non-stop transcontinental flights</li>
                      <li>Spacious cabin with premium leather seating</li>
                      <li>Advanced avionics and safety systems</li>
                      <li>Full galley and private lavatory</li>
                      <li>High-speed internet connectivity</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-medium text-slate-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Amenities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {amenities.map((amenity, index) => {
                        const Icon = amenity.icon;
                        return (
                          <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            <Icon className="h-6 w-6 text-yellow-400" />
                            <span className="text-slate-900 font-medium">{amenity.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'availability' && (
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Availability Calendar</h3>
                    <div className="bg-gray-50 p-8 rounded-lg text-center">
                      <p className="text-gray-600 mb-4">Select your preferred dates to check availability</p>
                      <input
                        type="date"
                        className="px-4 py-2 border border-gray-200 rounded-lg mr-4"
                      />
                      <input
                        type="date"
                        className="px-4 py-2 border border-gray-200 rounded-lg mr-4"
                      />
                      <button className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300">
                        Check Availability
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Request Quote</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
                  <input
                    type="text"
                    placeholder="Enter departure city"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <input
                    type="text"
                    placeholder="Enter destination city"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                  <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400">
                    {[...Array(14)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i + 1 === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Base Rate (4 hrs)</span>
                  <span className="font-medium">$34,000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Fuel Surcharge</span>
                  <span className="font-medium">$2,500</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Airport Fees</span>
                  <span className="font-medium">$1,200</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total Estimate</span>
                    <span className="text-2xl font-bold text-slate-900">$37,700</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors mb-3">
                Request Quote
              </button>
              <button className="w-full bg-slate-900 text-white py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Book Now
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Final pricing subject to route, availability, and additional services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AircraftDetails;