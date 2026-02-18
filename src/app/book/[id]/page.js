'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Plus, Minus, ShoppingCart, Check, X, ArrowLeft } from 'lucide-react';
import { getBookById, getBooksByCategory } from '@/data/books';
import { useCart } from '@/context/CartContext';
import BookCard from '@/components/BookCard';

export default function BookDetailsPage() {
  const params = useParams();
  const { addToCart, isLoading, cart } = useCart();
  
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (params.id) {
      const bookData = getBookById(params.id);
      if (bookData) {
        setBook(bookData);
        
        // Get related books from the same category
        const related = getBooksByCategory(bookData.category)
          .filter(b => b.id !== bookData.id)
          .slice(0, 4);
        setRelatedBooks(related);
      }
    }
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart(book, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        );
      } else {
        stars.push(
          <Star key={i} className="w-5 h-5 text-gray-300" />
        );
      }
    }
    return stars;
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading book details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Catalog
        </Link>

        {/* Book Details */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Book Cover */}
            <div className="relative aspect-[2/3] bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
                priority
              />
              {!book.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Book Info */}
            <div className="flex flex-col">
              {/* Category */}
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-200 text-sm font-medium rounded-full w-fit mb-4">
                {book.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {book.title}
              </h1>

              {/* Author */}
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">by {book.author}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">{renderStars(book.rating)}</div>
                <span className="text-gray-600">({book.rating} rating)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary-600">
                  ${book.price.toFixed(2)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {book.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-600 font-medium">In Stock</span>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Description</h2>
                <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${!isDescriptionExpanded && 'line-clamp-4'}`}>
                  {book.description}
                </p>
                {book.description.length > 200 && (
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 mt-2"
                  >
                    {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>

              {/* Book Details */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pages</p>
                  <p className="font-semibold text-gray-900">{book.pages}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Published</p>
                  <p className="font-semibold text-gray-900">{book.year}</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!book.inStock || isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : book.inStock
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-6 h-6" /> Added to Cart!
                  </span>
                ) : isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adding...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingCart className="w-6 h-6" />
                    {book.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map((relatedBook, index) => (
                <BookCard key={relatedBook.id} book={relatedBook} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
