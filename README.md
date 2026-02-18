# BookStore - Online Bookstore Website

A beautiful, modern Online Bookstore Website built with Next.js 14+, React, and Tailwind CSS.

## Features

### Home Page
- Hero section with gradient background and call-to-action button
- Featured Books section with 4 top-rated book cards
- Categories Grid with 6 category cards (Fiction, Science Fiction, Fantasy, Mystery, Self-Help, Romance)
- New Arrivals section with horizontal scrolling
- Smooth fade-in animations on page load
- Card hover effects with scale and shadow

### Books Catalog Page
- Responsive grid layout
- Book cards with cover image, title, author, price, and rating stars
- Real-time search by book title or author
- Category filter dropdown
- Pagination with 12 books per page
- Card hover effects with lift and shadow

### Book Details Page
- Book cover on left, details on right (stacks on mobile)
- Title, author, price, rating with stars, stock status
- Full book description with Read More/Less toggle
- Quantity selector with +/- buttons
- Add to Cart button with loading state
- Related Books section at the bottom

### Shopping Cart Page
- Cart items list with thumbnail, title, price, quantity
- Quantity controls with +/- buttons
- Remove button to delete items
- Price summary (subtotal, shipping, total)
- Empty state with illustration
- Checkout button with alert

### Navigation & Layout
- Fixed header with logo, navigation links, and cart icon with item count badge
- Mobile menu with hamburger icon
- Footer with links and copyright text
- Active page highlighting in navigation

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **UI Library**: React 18+ with Hooks
- **Styling**: Tailwind CSS 3+
- **Icons**: Lucide React
- **State Management**: React Context API
- **Language**: JavaScript ES6+

## Project Structure

```
bookstore-frontend/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with Header/Footer
│   │   ├── page.js            # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── catalog/
│   │   │   └── page.js        # Books catalog page
│   │   ├── book/
│   │   │   └── [id]/
│   │   │       └── page.js    # Book details page
│   │   └── cart/
│   │       └── page.js        # Shopping cart page
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   ├── Footer.js          # Footer component
│   │   ├── Hero.js            # Hero section
│   │   ├── BookCard.js        # Book card component
│   │   ├── CartItem.js        # Cart item component
│   │   └── CategoryCard.js    # Category card component
│   ├── context/
│   │   └── CartContext.js     # Cart state management
│   └── data/
│       └── books.js            # Mock book data (28 books)
├── public/                    # Static files
├── package.json               # Dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```
bash
git clone <repository-url>
cd bookstore-frontend
```

2. Install dependencies:
```
bash
npm install
```

3. Run the development server:
```
bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```
bash
npm run build
npm start
```

## Design Features

- **Color Scheme**: Primary blue (#3b82f6) with gray tones
- **Typography**: Inter font from Google Fonts
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Animations**: Smooth fade-in, slide-up, and scale effects
- **Hover States**: Every button and card has hover effects
- **Transitions**: Smooth transitions with duration-300

Deployment link:https://online-bookstore-website-ot8b.vercel.app/


