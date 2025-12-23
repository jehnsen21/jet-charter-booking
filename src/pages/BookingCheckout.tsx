import React, { useState } from 'react';
import { Check, CreditCard, Building, Smartphone } from 'lucide-react';

const BookingCheckout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const steps = [
    { number: 1, title: 'Flight Details', completed: currentStep > 1 },
    { number: 2, title: 'Passenger Info', completed: currentStep > 2 },
    { number: 3, title: 'Add-ons', completed: currentStep > 3 },
    { number: 4, title: 'Payment', completed: false }
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step.completed 
                        ? 'bg-green-500 text-white'
                        : currentStep === step.number
                        ? 'bg-yellow-400 text-slate-900'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.completed ? <Check className="h-5 w-5" /> : step.number}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${
                      currentStep === step.number ? 'text-slate-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`mx-6 h-0.5 w-16 ${
                        step.completed ? 'bg-green-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Flight Details</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
                      <input
                        type="text"
                        defaultValue="New York (JFK)"
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                      <input
                        type="text"
                        defaultValue="Los Angeles (LAX)"
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date & Time</label>
                      <input
                        type="datetime-local"
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                      <select className="w-full px-3 py-3 border border-gray-200 rounded-lg">
                        <option value="4">4 Passengers</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Passenger Information</h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Primary Passenger</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <input type="text" className="w-full px-3 py-3 border border-gray-200 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <input type="text" className="w-full px-3 py-3 border border-gray-200 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input type="email" className="w-full px-3 py-3 border border-gray-200 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input type="tel" className="w-full px-3 py-3 border border-gray-200 rounded-lg" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Additional Passengers</h3>
                      <button className="text-yellow-600 hover:text-yellow-700 font-medium">
                        + Add Passenger
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Add-on Services</h2>
                  <div className="space-y-4">
                    {[
                      { name: 'Ground Transportation', price: 150, description: 'Luxury car service to/from airport' },
                      { name: 'Catering Service', price: 250, description: 'Premium in-flight dining experience' },
                      { name: 'Extra Baggage', price: 100, description: 'Additional baggage allowance' },
                      { name: 'Pet Transportation', price: 300, description: 'Safe and comfortable pet travel' }
                    ].map((addon) => (
                      <label key={addon.name} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input type="checkbox" className="mr-4" />
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">{addon.name}</div>
                          <div className="text-sm text-gray-600">{addon.description}</div>
                        </div>
                        <div className="font-bold text-slate-900">+${addon.price}</div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Method</h2>
                  <div className="space-y-4 mb-6">
                    {[
                      { id: 'card', icon: CreditCard, title: 'Credit Card', description: 'Visa, Mastercard, American Express' },
                      { id: 'bank', icon: Building, title: 'Bank Transfer', description: 'Direct bank transfer' },
                      { id: 'wallet', icon: Smartphone, title: 'Digital Wallet', description: 'Apple Pay, Google Pay' }
                    ].map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.id}
                          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            paymentMethod === method.id
                              ? 'border-yellow-400 bg-yellow-50'
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="mr-4"
                          />
                          <Icon className="h-6 w-6 text-gray-600 mr-3" />
                          <div>
                            <div className="font-medium text-slate-900">{method.title}</div>
                            <div className="text-sm text-gray-600">{method.description}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3 py-3 border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50"
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="px-6 py-3 bg-yellow-400 text-slate-900 rounded-lg font-medium hover:bg-yellow-300"
                >
                  {currentStep === 4 ? 'Complete Booking' : 'Continue'}
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Aircraft"
                    className="w-16 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <div className="font-bold text-slate-900">Gulfstream G650</div>
                    <div className="text-sm text-gray-600">Elite Aviation</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Route</span>
                      <span className="font-medium">JFK → LAX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium">Dec 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Passengers</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Flight Time</span>
                      <span className="font-medium">5.5 hours</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Rate</span>
                      <span className="font-medium">$46,750</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fuel Surcharge</span>
                      <span className="font-medium">$3,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Airport Fees</span>
                      <span className="font-medium">$1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Add-ons</span>
                      <span className="font-medium">$400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes & Fees</span>
                      <span className="font-medium">$2,150</span>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-gray-900 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-2xl font-bold text-slate-900">$54,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="text-sm text-yellow-800">
                  <div className="font-medium mb-1">Price Protection</div>
                  <div>This quote is guaranteed for 24 hours</div>
                </div>
              </div>

              <div className="text-xs text-gray-500 text-center">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCheckout;