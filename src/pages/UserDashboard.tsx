import React, { useState } from 'react';
import { Calendar, CreditCard, Settings, User, MapPin, Clock, Star } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('trips');

  const upcomingTrips = [
    {
      id: 1,
      aircraft: 'Gulfstream G650',
      route: 'JFK → LAX',
      date: 'Dec 15, 2024',
      time: '2:00 PM EST',
      status: 'Confirmed',
      price: '$54,000'
    },
    {
      id: 2,
      aircraft: 'Citation X+',
      route: 'LAX → MIA',
      date: 'Dec 20, 2024',
      time: '10:30 AM PST',
      status: 'Pending',
      price: '$28,500'
    }
  ];

  const pastTrips = [
    {
      id: 3,
      aircraft: 'Bombardier Global 7500',
      route: 'MIA → NYC',
      date: 'Nov 28, 2024',
      status: 'Completed',
      rating: 5
    }
  ];

  const quotes = [
    {
      id: 1,
      route: 'NYC → London',
      aircraft: 'Gulfstream G650',
      date: 'Jan 10, 2025',
      status: 'Pending',
      price: '$75,000',
      expires: '2 days'
    },
    {
      id: 2,
      route: 'Chicago → Vegas',
      aircraft: 'Citation Mustang',
      date: 'Jan 15, 2025',
      status: 'Declined',
      price: '$12,500',
      expires: 'Expired'
    }
  ];

  const sidebarItems = [
    { id: 'trips', label: 'My Trips', icon: Calendar },
    { id: 'quotes', label: 'Quotes', icon: MapPin },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="text-center mb-6">
                <img
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-slate-900">John Smith</h3>
                <p className="text-gray-600">Premium Member</p>
              </div>
              
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-yellow-400 text-slate-900'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'trips' && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-8">My Trips</h1>
                
                {/* Upcoming Trips */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Upcoming Flights</h2>
                  <div className="space-y-4">
                    {upcomingTrips.map((trip) => (
                      <div key={trip.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{trip.aircraft}</h3>
                            <div className="flex items-center space-x-4 text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{trip.route}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{trip.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{trip.time}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900 mb-2">{trip.price}</div>
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                              trip.status === 'Confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {trip.status}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <button className="flex-1 bg-slate-900 text-white py-2 px-4 rounded-lg hover:bg-slate-800">
                            View Details
                          </button>
                          <button className="flex-1 bg-gray-100 text-slate-900 py-2 px-4 rounded-lg hover:bg-gray-200">
                            Modify Booking
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Trips */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Flight History</h2>
                  <div className="space-y-4">
                    {pastTrips.map((trip) => (
                      <div key={trip.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{trip.aircraft}</h3>
                            <div className="flex items-center space-x-4 text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{trip.route}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{trip.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center mb-2">
                              {[...Array(trip.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              {trip.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'quotes' && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-8">My Quotes</h1>
                <div className="space-y-4">
                  {quotes.map((quote) => (
                    <div key={quote.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{quote.aircraft}</h3>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{quote.route}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{quote.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-900 mb-2">{quote.price}</div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            quote.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : quote.status === 'Approved'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {quote.status}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          {quote.status === 'Pending' ? `Expires in ${quote.expires}` : quote.expires}
                        </span>
                        <div className="space-x-3">
                          {quote.status === 'Pending' && (
                            <>
                              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800">
                                Accept
                              </button>
                              <button className="bg-gray-100 text-slate-900 px-4 py-2 rounded-lg hover:bg-gray-200">
                                Decline
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Profile Settings</h1>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Smith"
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.smith@email.com"
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-300">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;