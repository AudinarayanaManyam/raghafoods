'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    
    email: '',
    name: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleAddressClick = () => {
    // Replace these coordinates with your actual business location
    window.open('https://www.google.com/maps/place/Indis+VB+City,+208,+Bolarum+-+Turkapally+Rd,+Railway+Employees+Colony+Phase+I,+Railway+Employees+Colony,+Bolarum,+Secunderabad,+Telangana+500010/@17.5387311,78.4945351,15z/data=!3m1!4b1!4m10!1m2!2m1!1s2nd+Floor,+Flat+No+204,+E-block,+Indis+VB+City++Machha+Bollaram+Road,+Secunderabad++Medchal+Malkajgiri,+Telangana+%E2%80%93+500010!3m6!1s0x3bcb8524427ccad3:0xf4dcb8084a7a0dd8!8m2!3d17.538732!4d78.5129892!15sCnwybmQgRmxvb3IsIEZsYXQgTm8gMjA0LCBFLWJsb2NrLCBJbmRpcyBWQiBDaXR5ICBNYWNoaGEgQm9sbGFyYW0gUm9hZCwgU2VjdW5kZXJhYmFkICBNZWRjaGFsIE1hbGthamdpcmksIFRlbGFuZ2FuYSDigJMgNTAwMDEwkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11w7qdnbkj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({  email: '',name: '', message: '' }); // Clear form
      setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setTimeout(() => setStatus('idle'), 5000);
    } 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Visit Us</h2>
          
          {/* Address with Map Icon */}
          <div 
            className="flex items-start space-x-3 mb-6 cursor-pointer group"
            onClick={handleAddressClick}
          >
            {/* Map Icon */}
            <div className="mt-1 text-orange-600 group-hover:text-orange-700 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>

            {/* Address Text */}
           {/* Address Text */}
<div className="group-hover:text-orange-600 transition-colors">
  <p className="text-gray-700 font-medium">GORIPARTHI RAGHAVAMMA</p>
  <p className="text-gray-700">RAAGA HOMELY BATTERS AND PICKLES</p>
  <p className="text-gray-700">GSTIN: 36CIDPG2839Q1ZS</p>
  <p className="text-gray-700 mt-2">
    2nd Floor, Flat No 204, E-block, Indis VB City
  </p>
  <p className="text-gray-700">
    Machha Bollaram Road, Secunderabad
  </p>
  <p className="text-gray-700">
    Medchal Malkajgiri, Telangana – 500010
  </p>
</div>

          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <a 
              href="mailto:info@raagafoods.com"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-orange-600 group-hover:text-orange-700 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700 group-hover:text-orange-600 transition-colors"> raagahomelybattersandpickles@gmail.com</span>
            </a>
            <a 
              href="tel:+911234567890" 
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-orange-600 group-hover:text-orange-700 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700 group-hover:text-orange-600 transition-colors">+91 9390687301</span>
            </a>
          </div>

          
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
           

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
                 <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 px-6 text-white rounded-md transition-all ${
                status === 'sending' 
                  ? 'bg-orange-400 cursor-not-allowed'
                  : 'bg-orange-600 hover:bg-orange-700 active:transform active:scale-[0.99]'
              }`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700 text-center">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700 text-center">
                  {errorMessage || 'Sorry, there was an error sending your message. Please try again.'}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
   
  );
}

