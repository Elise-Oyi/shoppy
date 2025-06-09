"use client";

import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();

  const productTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push("/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F1F1] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold uppercase">Cart ({cart.length})</h1>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-gray-500 underline hover:text-black transition-colors"
                  >
                    Remove all
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-6">Your cart is empty</p>
                  <Link href="/" className="btn-primary">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-[#F1F1F1] rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-sm uppercase">{item.name.split(' ').slice(0, -1).join(' ')}</h3>
                        <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
                      </div>

                      <div className="flex items-center bg-[#F1F1F1]">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-3 py-2 hover:text-[#D87D4A] transition-colors text-sm font-bold"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 text-sm font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 hover:text-[#D87D4A] transition-colors text-sm font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-lg font-bold uppercase mb-8">Summary</h2>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">Total</span>
                  <span className="font-bold text-lg">$ {productTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`w-full ${cart.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'btn-primary'} justify-center`}
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}