# NextGenPC — Datastalgo Quiz 1

## Overview
NextGenPC is a single-page React application showcasing a compact e-commerce experience for gaming PCs and peripherals. It uses React Router for SPA navigation and React Bootstrap for responsive UI components. The app includes a landing page, product catalog, category views, a detailed product page, a shopping cart with persistence, a checkout confirmation page, and a simple user profile page.

## Background
NextGenPC Angeles is a computer shop based in Angeles, Pampanga. The shop focuses on delivering reliable builds and curated peripherals for gamers, internet cafes (Pisonet setups), and everyday users.

What they do:
- Custom PC builds tailored to gaming and business needs
- Durable, high-performance Pisonet setups for computer shops
- Premium peripherals (keyboards, mice, headsets, monitors)
- Flexible payment options: cash, GCash, bank transfer, credit/debit cards, and installment plans via Home Credit and BillEase

Mission: Provide high-quality components and dependable service, ensuring a premium gaming experience for casual and competitive users.

## Tech Stack
- React (Create React App)
- React Router for client-side routing
- React Bootstrap + Bootstrap for UI (Bootswatch compatible)
- Font Awesome for icons

## Project Structure
```
frontend/
	public/
		images/
		index.html
	src/
		App.js
		index.js
		index.css
		products.js
		components/
			Header.jsx
			Footer.jsx
			Product.jsx
			Rating.jsx
		screens/
			LandingPage.jsx
			HomeScreen.jsx
			ProductScreen.jsx
			PeripheralsScreen.jsx
			PrebuiltsScreen.jsx
			CartScreen.jsx
			CheckoutScreen.jsx
			UserScreen.jsx
		context/
			CartContext.jsx
```

## Routes and Pages
- `/` — LandingPage
	- Store introduction and location
	- Who We Are: background of NextGenPC
	- What We Do: custom builds, peripherals, support
	- Services and Products: custom builds, Pisonet setups, payment options
	- Contact Information: email and Facebook

- `/products` — HomeScreen
	- Displays all products from `src/products.js` in a responsive grid
	- Product cards show image, name, rating, reviews, and price

- `/product/:id` — ProductScreen
	- Detailed product view with image, name, rating, description, and price
	- Add to Cart button navigates to the cart

- `/peripherals` — PeripheralsScreen
	- Filters and shows products where `category === 'Peripherals'`

- `/prebuilts` — PrebuiltsScreen
	- Filters and shows products where `category === 'Prebuilts'`

- `/cart` — CartScreen
	- Lists items in the cart with quantity selection and remove option
	- Displays subtotal and Proceed To Checkout button

- `/checkout` — CheckoutScreen
	- Thank-you page with order summary (items and total)
	- Continue Shopping redirects to `/products` and clears cart

- `/user` — UserScreen
	- Basic profile form (name, email, password update) with client-side validation

## Navigation
- Header: Home, Products, Categories (Peripherals, Prebuilts), Cart (with item count badge), User (right-aligned)
- Logo links to `/`

## State Management
`CartContext` provides cart state and actions:
- `addToCart(product, qty)`
- `removeFromCart(id)`
- `updateQty(id, qty)`
- `clearCart()`
- Derived values: `cartItems`, `cartItemsCount`, `cartTotal`

Persistence:
- Cart is saved to `localStorage` and restored on load for consistent experience across navigation and refreshes.

## Data
`src/products.js` contains representative product data:
- Fields: `_id`, `name`, `image`, `description`, `brand`, `category`, `price`, `countInStock`, `rating`, `numReviews`
- Images served from `public/images/`

## Mobile Responsiveness
- Bootstrap grid (`Row`, `Col`) with responsive breakpoints (`sm`, `md`, `lg`, `xl`)
- Product images use fixed height and `object-fit: cover` for consistent card sizes

## Client Reference
- Facebook: https://www.facebook.com/profile.php?id=61571393386812
- Email: `nextgenpc.gamingrigs@gmail.com`

## Getting Started
Install dependencies and run locally:
```powershell
cd frontend
npm install
npm start
```
The app will be available at `http://localhost:3000`.

## Build
Create a production build:
```powershell
npm run build
```
Outputs to `frontend/build`.

## Deployment
Serve the `build` folder with any static hosting provider.

## Notes
- Only Bootstrap + React Bootstrap components are used; no additional UI libraries.
- SPA navigation via React Router (no full page reloads).
- Clean, maintainable code styled for readability.
