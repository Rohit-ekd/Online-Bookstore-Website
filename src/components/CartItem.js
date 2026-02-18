'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      {/* Book Image */}
      <Link href={`/book/${item.id}`} className="flex-shrink-0">
        <div className="relative w-24 h-36 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Book Details */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <Link href={`/book/${item.id}`}>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 hover:text-primary-600 transition-colors duration-300 line-clamp-2">
              {item.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.author}</p>
          <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
            {item.category}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Quantity Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-semibold dark:text-gray-100">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-lg font-bold text-primary-600">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-gray-500 dark:text-gray-400">${item.price.toFixed(2)} each</p>
            )}
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="flex-shrink-0 p-2 text-gray-400 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors duration-300"
        title="Remove from cart"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
