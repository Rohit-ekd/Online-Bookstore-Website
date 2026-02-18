'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function BookCard({ book, index = 0 }) {
  const { addToCart, isLoading } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book, 1);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <Link
      href={`/book/${book.id}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Book Cover */}
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Add to cart button on hover */}
        <button
          onClick={handleAddToCart}
          disabled={!book.inStock || isLoading}
          className="absolute bottom-3 right-3 p-3 bg-primary-600 text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>

        {/* Out of stock badge */}
        {!book.inStock && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
            Out of Stock
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="p-4">
        {/* Category */}
        <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-2">
          {book.category}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
          {book.title}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{book.author}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {renderStars(book.rating)}
          <span className="ml-1 text-sm text-gray-500">({book.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">
            ${book.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
