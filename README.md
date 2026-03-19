# Angus Quay — Restaurant Website

A modern, fully responsive restaurant website for **Angus Quay**, a fine-dining establishment located at South Tay Square, Dundee. Built with React, Vite, and Tailwind CSS, featuring smooth animations and an elegant design.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [React Router DOM v6](https://reactrouter.com/) | Client-side routing |
| [React Hook Form](https://react-hook-form.com/) | Contact form handling |
| [Ant Design](https://ant.design/) | Notification components |
| [Swiper.js](https://swiperjs.com/) | Review carousel |
| [React Leaflet](https://react-leaflet.js.org/) | Interactive map |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

---

## Features

- Smooth GPU-accelerated parallax hero using Framer Motion `useScroll` + `useTransform`
- Animated tab navigation on the menu page with classic dot-leader pricing layout
- Today's day auto-highlighted on the restaurant hours page
- Contact form with validation and success notifications
- Interactive Leaflet map showing restaurant location
- Fully responsive — mobile, tablet, and desktop
- Mobile slide-in navigation drawer with staggered link animations
- Consistent brand design system via custom Tailwind colours and typography

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, stats band, reviews carousel, services, gift section |
| Menu | `/menu` | 4-section menu (Starters, Mains, Desserts, Drinks) with sticky image panel |
| Restaurant Hours | `/hours` | Weekly schedule with today highlight + photo gallery |
| About Us | `/about` | Story, values, timeline, and visit CTA |
| Contact Us | `/contact` | Contact form + interactive map |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Muzammil8989/AngusQuay.git
cd AngusQuay

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Project Structure

```
src/
├── assets/
│   └── Images/            # Local image assets
├── components/
│   ├── Navbar/            # Responsive navigation with mobile drawer
│   └── Footer/            # Site footer
└── Pages/
    ├── Home/              # Hero, Reviews, Services, GiftSection, SocialSection
    ├── MenuPrice/         # Tabbed menu with sticky image panel
    ├── RestaurantHours/   # Hours table + photo gallery
    ├── About-us/          # Story, values, timeline
    └── Contact-Us/        # Form + interactive map
```

---

## Brand Design System

| Token | Value | Usage |
|---|---|---|
| `primary` | `#F5F0EA` | Warm off-white — page backgrounds |
| `secondary` | `#6F5243` | Deep brown — text, navbars, footers |
| `tertiary` | `#e0996e` | Warm amber — highlights, prices, accents |
| `font-fjalla` | Fjalla One | Display headings |
| `font-source` | Source Sans 3 | Body text |

---

## License

This project is private and intended for use by Angus Quay restaurant.
