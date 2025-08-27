import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Your other content can go here */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* PrimeTime Section */}
            <div className="col-span-1 md:col-span-1">
              <h5 className="text-yellow-400 text-lg font-bold uppercase mb-4" style={{color:'rgb(250 204 21)'}}>
                PrimeTime
              </h5>
              <p className="text-gray-300 text-sm leading-relaxed">
               <i>PrimeTime</i> Television Ltd is an Indian news media company focusing on broadcast and digital news publication. 
               It was founded in 2010 by economist Aliasgar Kholkawala .
              </p>
            </div>
            {/* Services Section */}
            <div className="col-span-1">
              <h5 className="text-yellow-400 text-lg font-bold uppercase mb-4 " style={{color:'rgb(250 204 21)'}}>
                Services
              </h5>
              <div className="space-y-2">
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    The Providers
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    Creativity
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    Source Files
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    Bootstrap 5
                  </a>
                </p>
              </div>
            </div>
            {/* Useful Links Section */}
            <div className="col-span-1">
              <h5 className="text-yellow-400 text-lg font-bold uppercase mb-4" style={{color:'rgb(250 204 21)'}}>
                Useful Links
              </h5>
              <div className="space-y-2">
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    Become Affiliate
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    Service Provider
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 no-underline">
                    Help
                  </a>
                </p>
              </div>
            </div>
            {/* Contacts Section */}
            <div className="col-span-1">
              <h5 className="text-yellow-400 text-lg font-bold uppercase mb-4" style={{color:'rgb(250 204 21)'}}>
                Contacts
              </h5>
              <div className="space-y-3 text-sm">
                <p className="flex items-start justify-center md:justify-start">
                  <span className="mr-3 mt-1">🏠</span>
                  <span>BAANI address 1, Golf Course RD, SEC-56, New Delhi</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-3">✉️</span>
                  <span>CustomerHelp@PrimeTime.com</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-3">📞</span>
                  <span>1800-208-2653</span>
                </p>
              </div>
            </div>
          </div>
          {/* Divider */}
          <hr className="border-gray-600 my-6" />
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Company, Inc
            </p>
          </div>
          <div className="centerdiv">
            <a href="https://www.facebook.com">
              <i className='fa fa-facebook'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}