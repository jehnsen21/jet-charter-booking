import React, { useState } from 'react';
import { Plane, MessageSquare, Calendar, DollarSign, FileText, Settings } from 'lucide-react';

const OperatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('fleet');

  const fleet = [
    {
      id: 1,
      name: 'Gulfstream G650',
      registration: 'N123AB',
      status: 'Available',
      location: 'JFK',
      nextMaintenance: 'Jan 15, 2025',
      totalHours: '2,450'
    },
    {
      id: 2,
      name: 'Citation X+',
      registration: 'N456CD',
      status: 'In Flight',
      location: 'En Route LAX',
      nextMaintenance: 'Feb 10, 2025',
      totalHours: '1,875'
    }
  ];

  const quotes = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      route: 'NYC → London',
      date: 'Jan 10, 2025',
      passengers: 8,
      aircraft: 'Gulfstream G650',
      status: 'Pending',
      amount: '$75,000'
    },
    {
      id: 2,
      customer: 'Michael Chen',
      route: 'LA → Vegas',
      date: 'Jan 12, 2025',
      passengers: 4,
      aircraft: 'Citation X+',
      status: 'Responded',
      amount: '$15,500'
    }
  ];

  const sidebarItems = [
    { id: 'fleet', label: 'Fleet Management', icon: Plane },
    { id: 'quotes', label: 'Quotes Inbox', icon: MessageSquare },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'payouts', label: 'Payouts', icon: DollarSign },
    { id: 'documents', label: 'Documents', icon: FileText },
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
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-10 w-10 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Elite Aviation</h3>
                <p className="text-gray-600">Charter Operator</p>
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
            {activeTab === 'fleet' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold text-slate-900">Fleet Management</h1>
                  <button className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300">
                    Add Aircraft
                  </button>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aircraft
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Next Maintenance
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {fleet.map((aircraft) => (
                          <tr key={aircraft.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-gray-900">{aircraft.name}</div>
                                <div className="text-sm text-gray-500">{aircraft.registration}</div>
                                <div className="text-sm text-gray-500">{aircraft.totalHours} hours</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                aircraft.status === 'Available'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {aircraft.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {aircraft.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {aircraft.nextMaintenance}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-yellow-600 hover:text-yellow-900 mr-3">Edit</button>
                              <button className="text-slate-600 hover:text-slate-900">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'quotes' && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Quotes Inbox</h1>
                
                <div className="space-y-4">
                  {quotes.map((quote) => (
                    <div key={quote.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{quote.customer}</h3>
                          <div className="text-gray-600 space-y-1">
                            <div>Route: {quote.route}</div>
                            <div>Date: {quote.date}</div>
                            <div>Passengers: {quote.passengers}</div>
                            <div>Preferred Aircraft: {quote.aircraft}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-900 mb-2">{quote.amount}</div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            quote.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {quote.status}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-slate-900 text-white py-2 px-4 rounded-lg hover:bg-slate-800">
                          View Details
                        </button>
                        <button className="flex-1 bg-yellow-400 text-slate-900 py-2 px-4 rounded-lg hover:bg-yellow-300">
                          Respond
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;