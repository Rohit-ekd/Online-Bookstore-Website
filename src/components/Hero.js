'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>Discover Your Next Favorite Book</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Unlock the Power of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
            Reading
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Explore thousands of books across all genres. From bestsellers to hidden gems, find your perfect read today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-600/25"
          >
            Browse Catalog
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/catalog?category=Fiction"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            Explore Fiction
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white">10K+</p>
            <p className="text-gray-400 mt-1">Books</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white">50+</p>
            <p className="text-gray-400 mt-1">Categories</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white">100K+</p>
            <p className="text-gray-400 mt-1">Readers</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
