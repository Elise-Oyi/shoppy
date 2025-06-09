export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#F1F1F1] py-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold uppercase mb-4">Thank You</h1>
          <p className="text-gray-600 mb-8">
            Your order has been received and is being processed.
          </p>
          <p className="text-sm text-gray-500">
            This is a demo checkout. No payment was processed.
          </p>
        </div>
      </div>
    </div>
  );
}