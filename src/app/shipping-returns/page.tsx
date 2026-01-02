export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 sm:p-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Shipping & Returns Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: December 13, 2025</p>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At Raaga Foods, we&apos;re committed to delivering your orders promptly and ensuring your complete satisfaction. Here&apos;s our comprehensive shipping and returns policy.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">📦 Shipping Policy</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Processing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Orders are processed within <strong>1-2 business days</strong> (excluding weekends and holidays)</li>
                <li>✓ You&apos;ll receive a confirmation email with tracking details</li>
                <li>✓ Processing begins after payment verification</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-4 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Delivery Timeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Metro Cities:</strong> 2-3 business days</li>
                <li>✓ <strong>Other Cities:</strong> 3-5 business days</li>
                <li>✓ <strong>Remote Areas:</strong> 5-7 business days</li>
                <li>✓ Delivery times are estimates and may vary</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-4 border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Shipping Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ We partner with reliable logistics providers</li>
                <li>✓ All shipments are insured against damage</li>
                <li>✓ Real-time tracking available on all orders</li>
                <li>✓ Signature required for high-value orders</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Shipping Charges</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Shipping costs are calculated based on location and weight</li>
                <li>✓ Free shipping available on orders above ₹500</li>
                <li>✓ Charges displayed clearly at checkout</li>
                <li>✓ No hidden fees</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔄 Return Policy</h2>
            
            <div className="bg-red-50 p-6 rounded-lg mb-4 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Return Eligibility</h3>
              <p className="text-gray-700 mb-3"><strong>Returns are accepted within 7 days of delivery under these conditions:</strong></p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-4 border-l-4 border-amber-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Non-Returnable Items</h3>
              <p className="text-gray-700 mb-3">The following items cannot be returned:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>✗ Opened or partially used products</li>
                <li>✗ Products past their expiration or best-before dates</li>
                <li>✗ Items without original packaging or labels</li>
                <li>✗ Custom or personalized orders</li>
                <li>✗ Products damaged due to improper handling by customer</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Return</h3>
              <ol className="space-y-2 text-gray-700 ml-4">
                <li>1. Contact our customer service team at <strong>info@raagafoods.com</strong></li>
                <li>2. Provide your order number and reason for return</li>
                <li>3. Obtain a return authorization number</li>
                <li>4. Pack the item securely in original packaging</li>
                <li>5. Ship using the return label provided</li>
                <li>6. Item must be received within 30 days of purchase</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">💰 Refund Policy</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-4 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Refund Timeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Inspection:</strong> 2-3 business days after receipt</li>
                <li>✓ <strong>Approval:</strong> You&apos;ll receive an email confirmation</li>
                <li>✓ <strong>Processing:</strong> 5-7 business days to your account</li>
                <li>✓ <strong>Display:</strong> May take additional 2-3 days to appear</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Refund Amount</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Full refund of product price for eligible returns</li>
                <li>✓ Original shipping charges are non-refundable</li>
                <li>✓ Return shipping is customer&apos;s responsibility</li>
                <li>✓ Refund via original payment method</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">❓ Damaged or Defective Items</h2>
            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-700 mb-4">If you receive a damaged or defective product:</p>
              <ol className="space-y-2 text-gray-700 ml-4">
                <li>1. Report within <strong>24 hours of delivery</strong></li>
                <li>2. Provide photos of the damaged item and packaging</li>
                <li>3. Contact us immediately at info@raagafoods.com</li>
                <li>4. We&apos;ll arrange a replacement or full refund</li>
                <li>5. Return shipping will be arranged at our cost</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">📞 Contact & Support</h2>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700 mb-2"><strong>Email:</strong>  raagahomelybattersandpickles@gmail.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 9390687301</p>
             
              <p className="text-gray-700"><strong>Address:</strong> 2nd Floor, Flat No 204, E-block, Indis VB City, Machha Bollaram Road, Secunderabad, Medchal Malkajgiri, Telangana – 500010</p>
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600"><strong>Note:</strong> We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting to the website. For the most current policy information, please check this page regularly.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
