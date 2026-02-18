'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import BookCard from '@/components/BookCard';
import CategoryCard from '@/components/CategoryCard';
import { getFeaturedBooks, getNewArrivals, categories } from '@/data/books';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredBooks = getFeaturedBooks();
  const newArrivals = getNewArrivals();
  const displayCategories = categories.slice(0, 6);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Hero Section */}
      <Hero />

      {/* Featured Books Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Featured Books
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Handpicked selections from our top-rated books
              </p>
            </div>
            <Link
              href="/catalog"
              className="hidden sm:flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
            >
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              View All Books <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Browse by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our vast collection across different genres and categories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {displayCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          {/* View All Categories */}
          <div className="mt-8 text-center">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300"
            >
              View All Categories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                New Arrivals
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Check out the latest additions to our collection
              </p>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {newArrivals.map((book, index) => (
                <div key={book.id} className="w-64 flex-shrink-0">
                  <BookCard book={book} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-500 dark:to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Reading?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of book lovers and discover your next favorite story today.
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Explore Our Catalog <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
