'use client';

import Link from 'next/link';
import { Book, Rocket, Wand2, Search, Heart, Clock, User } from 'lucide-react';

const iconMap = {
  Book: Book,
  Rocket: Rocket,
  Wand: Wand2,
  Search: Search,
  Heart: Heart,
  Clock: Clock,
  User: User,
};

export default function CategoryCard({ category, index = 0 }) {
  const Icon = iconMap[category.icon] || Book;

  return (
    <Link
      href={`/catalog?category=${encodeURIComponent(category.name)}`}
      className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in flex flex-col items-center text-center"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-primary-600 transition-colors duration-300">
        {category.name}
      </h3>

      {/* Count */}
      <p className="text-sm text-gray-500">
        {category.count} {category.count === 1 ? 'book' : 'books'}
      </p>
    </Link>
  );
}
