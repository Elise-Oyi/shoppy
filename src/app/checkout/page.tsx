'use client';

import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const [submitted, setSubmitted] = useState(false);

  const shippingCost = 50;
  const productTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = productTotal * 0.2;
  const total = productTotal + vat + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {submitted ? (
        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Order Confirmed 🎉</h2>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase! Here’s a summary of your order:
          </p>
          <ul className="mb-2">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} — ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2">Total Paid: ${total.toFixed(2)}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              name="name"
              required
              className="w-full border rounded px-4 py-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border rounded px-4 py-2"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Shipping Address</label>
            <textarea
              name="address"
              required
              className="w-full border rounded px-4 py-2"
              placeholder="123 Street, City, Country"
            />
          </div>

          <div className="border-t pt-4 text-right">
            <p className="text-sm text-gray-600">Subtotal: ${productTotal.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Shipping: ${shippingCost.toFixed(2)}</p>
            <p className="text-sm text-gray-600">VAT (20%): ${vat.toFixed(2)}</p>
            <p className="text-xl font-bold mt-2">Total: ${total.toFixed(2)}</p>

            <button
              type="submit"
              className="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
            >
              Place Order
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
