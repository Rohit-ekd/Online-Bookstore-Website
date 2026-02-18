'use client';

import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">BookStore</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for discovering amazing books. We believe in the power of stories to transform lives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-primary-400 transition-colors duration-300">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-primary-400 transition-colors duration-300">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog?category=Fiction" className="hover:text-primary-400 transition-colors duration-300">
                  Fiction
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Science Fiction" className="hover:text-primary-400 transition-colors duration-300">
                  Science Fiction
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Fantasy" className="hover:text-primary-400 transition-colors duration-300">
                  Fantasy
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Mystery" className="hover:text-primary-400 transition-colors duration-300">
                  Mystery
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Self-Help" className="hover:text-primary-400 transition-colors duration-300">
                  Self-Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>123 Book Street, Reading City, RC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>contact@bookstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} BookStore. All rights reserved. Made with ❤️ for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
