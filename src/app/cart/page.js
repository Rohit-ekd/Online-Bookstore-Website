'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cart, getCartTotal, getCartCount, clearCart } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;
  const itemCount = getCartCount();

  const handleCheckout = () => {
    alert('Thank you for your order! This is a demo checkout. In a real app, you would be redirected to a payment gateway.');
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-24 pb-16 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {itemCount > 0 ? `You have ${itemCount} ${itemCount === 1 ? 'item' : 'items'} in your cart` : 'Your cart is empty'}
          </p>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors duration-300"
              >
                <Trash2 className="w-5 h-5" />
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                {/* Subtotal */}
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                {/* Shipping Notice */}
                {subtotal < 50 && (
                  <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-gray-200 my-4" />

                {/* Total */}
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-primary-600">${total.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Continue Shopping */}
                <Link
                  href="/catalog"
                  className="block text-center mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                >
                  Continue Shopping
                </Link>

                {/* Secure Checkout Notice */}
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any books to your cart yet. Start exploring our catalog to find your next great read!
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105"
            >
              Browse Catalog
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
