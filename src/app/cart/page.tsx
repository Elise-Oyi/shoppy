"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCartStore();

  const shippingCost = 50;
  const productTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = productTotal * 0.2;
  const total = productTotal + vat + shippingCost;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border p-4 rounded-lg shadow-sm"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 border p-4 rounded-lg shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded"
                />
                <div className="flex-1 text-center sm:text-left">...</div>
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">${item.price} each</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="text-red-500 text-sm mt-1"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="border-t pt-6 text-right">
            <p className="text-sm text-gray-600">
              Subtotal: ${productTotal.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600">
              Shipping: ${shippingCost.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600">
              VAT (20%): ${vat.toFixed(2)}
            </p>
            <p className="text-xl font-bold mt-2">Total: ${total.toFixed(2)}</p>

            <button className="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
