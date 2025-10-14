import Link from 'next/link';

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions (FAQ)</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I place an order?</h2>
          <p>Browse our products, add items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your order.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">What payment methods are accepted?</h2>
          <p>We accept all major credit/debit cards, UPI, and net banking.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How can I track my order?</h2>
          <p>Once your order is shipped, you will receive a tracking link via email or SMS.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Can I return or exchange a product?</h2>
          <p>Yes, please refer to our <Link href="/shipping-returns" className="text-orange-600 underline">Shipping & Returns</Link> page for details.</p>
        </div>
      </div>
    </div>
  );
}
