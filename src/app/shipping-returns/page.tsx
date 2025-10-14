export default function ShippingReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Shipping & Returns</h1>
      <h2 className="text-xl font-semibold mb-2 mt-6">Shipping Policy</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Orders are processed within 1-2 business days.</li>
        <li>Delivery time is typically 3-7 business days depending on your location.</li>
        <li>Shipping charges are calculated at checkout.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-6">Return & Exchange Policy</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Returns are accepted within 7 days of delivery for unopened and unused products.</li>
        <li>To initiate a return, contact our support team with your order details.</li>
        <li>Refunds are processed within 5-7 business days after receiving the returned item.</li>
      </ul>
    </div>
  );
}
