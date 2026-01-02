export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 sm:p-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: December 13, 2025</p>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Raaga Foods (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;Company&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information You Provide:</h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>✓ Name, email address, and phone number during account creation</li>
                <li>✓ Shipping and billing addresses for order fulfillment</li>
                <li>✓ Payment information (processed securely through payment gateways)</li>
                <li>✓ Customer service inquiries and communications</li>
                <li>✓ Product reviews and ratings</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information:</h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>✓ Browser type, IP address, and pages visited</li>
                <li>✓ Cookies and tracking pixels for enhanced experience</li>
                <li>✓ Device information and usage statistics</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-orange-600 mr-3 mt-1">•</span> <span>Process and fulfill your orders</span></li>
              <li className="flex items-start"><span className="text-orange-600 mr-3 mt-1">•</span> <span>Send transactional emails and order updates</span></li>
              <li className="flex items-start"><span className="text-orange-600 mr-3 mt-1">•</span> <span>Improve our website and customer service</span></li>
              <li className="flex items-start"><span className="text-orange-600 mr-3 mt-1">•</span> <span>Send marketing communications (with your consent)</span></li>
              <li className="flex items-start"><span className="text-orange-600 mr-3 mt-1">•</span> <span>Prevent fraud and ensure security</span></li>
              <li className="flex items-start"><span className="text-orange-600 mr-3 mt-1">•</span> <span>Comply with legal obligations</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share your information with:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>✓ Shipping partners for order delivery</li>
              <li>✓ Payment processors for secure transactions</li>
              <li>✓ Service providers who assist in operations</li>
              <li>✓ Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700">We implement industry-standard security measures including SSL encryption, secure payment gateways, and restricted access to personal data. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>✓ Access your personal information</li>
              <li>✓ Request corrections to your data</li>
              <li>✓ Request deletion of your account and data</li>
              <li>✓ Opt-out of marketing communications</li>
              <li>✓ Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> raagahomelybattersandpickles@gmail.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 9390687301</p>
              <p className="text-gray-700"><strong>Address:</strong> 2nd Floor, Flat No 204, E-block, Indis VB City, Machha Bollaram Road, Secunderabad, Medchal Malkajgiri, Telangana – 500010</p>
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">This Privacy Policy is subject to change without notice. We encourage you to review this policy periodically for updates.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
