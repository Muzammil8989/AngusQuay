import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Restaurant from "../../assets/Images/Restaurant.jpg";

const ease = [0.25, 0.1, 0.25, 1];

const sectionImages = {
  Starters: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&auto=format&fit=crop&q=80",
  Mains:    "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80",
  Desserts: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&auto=format&fit=crop&q=80",
  Drinks:   "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&auto=format&fit=crop&q=80",
};

const sectionSubtitles = {
  Starters: "Begin your journey",
  Mains:    "The heart of the menu",
  Desserts: "A sweet ending",
  Drinks:   "Raise a glass",
};

const menu = {
  Starters: [
    { name: "Soup of the Day",        description: "Freshly made daily, served with warm crusty bread",                    price: "£6.50"  },
    { name: "Chicken Wings",          description: "Crispy wings tossed in our signature house sauce with blue cheese dip", price: "£8.95"  },
    { name: "Garlic King Prawns",     description: "Pan-fried in garlic butter and white wine, toasted sourdough",          price: "£10.50" },
    { name: "Bruschetta",             description: "Toasted sourdough, heritage tomatoes, fresh basil, aged balsamic",      price: "£7.25"  },
    { name: "Salt & Pepper Calamari", description: "Crispy squid rings, lemon aioli, fresh chilli",                         price: "£9.50"  },
    { name: "Smoked Salmon Blinis",   description: "Scottish smoked salmon, crème fraîche, capers, dill",                   price: "£11.00" },
  ],
  Mains: [
    { name: "Angus Beef Burger",       description: "8oz dry-aged patty, aged cheddar, smoked bacon, house relish, brioche bun, fries", price: "£14.95" },
    { name: "Beer-Battered Haddock",   description: "Hand-cut chips, mushy peas, tartare sauce, lemon",                     price: "£15.95" },
    { name: "Pan-Roasted Chicken",     description: "Supreme breast, creamy mash, seasonal greens, tarragon jus",           price: "£16.50" },
    { name: "Penne Arrabbiata",        description: "Spicy San Marzano tomato sauce, fresh basil, parmesan (V)",            price: "£13.00" },
    { name: "Grilled Atlantic Salmon", description: "Lemon butter, crushed new potatoes, wilted spinach, capers",           price: "£18.95" },
    { name: "Slow-Cooked Lamb Shank",  description: "Rosemary & red wine jus, root vegetable mash, tender stem broccoli",  price: "£21.50" },
    { name: "Mushroom Risotto",        description: "Wild mushrooms, truffle oil, parmesan, fresh herbs (V)",               price: "£14.50" },
  ],
  Desserts: [
    { name: "Sticky Toffee Pudding", description: "Warm toffee sauce, clotted cream vanilla ice cream",               price: "£7.50" },
    { name: "Chocolate Fondant",     description: "Warm dark chocolate centre, raspberry coulis, fresh cream",        price: "£8.00" },
    { name: "Cheesecake of the Day", description: "Ask your server for today's flavour",                              price: "£7.00" },
    { name: "Classic Crème Brûlée",  description: "Madagascan vanilla custard, caramelised sugar crust, shortbread",  price: "£7.50" },
    { name: "Affogato",              description: "Vanilla ice cream, shot of espresso, amaretto biscuit",            price: "£5.50" },
  ],
  Drinks: [
    { name: "Soft Drinks",  description: "Coke, Diet Coke, Lemonade, J2O, Sparkling or Still Water",           price: "£2.95"      },
    { name: "Fresh Juices", description: "Orange, Apple, Cranberry, Pineapple",                                 price: "£3.50"      },
    { name: "Hot Drinks",   description: "Espresso, Americano, Cappuccino, Latte, Tea, Hot Chocolate",          price: "from £2.75" },
    { name: "House Wine",   description: "Red, White or Rosé — 175ml glass · 250ml glass · Bottle",            price: "from £6.50" },
    { name: "Craft Beer",   description: "Rotating selection of local Scottish and imported craft ales",         price: "from £4.95" },
    { name: "Cocktails",    description: "Ask your server for our seasonal signature cocktail list",            price: "from £9.50" },
    { name: "Mocktails",    description: "Refreshing alcohol-free alternatives — ask for today's selection",    price: "from £5.50" },
  ],
};

const tabs = Object.keys(menu);

export default function MenuPrice() {
  const [activeTab, setActiveTab] = useState("Starters");

  return (
    <div className="bg-primary min-h-screen">

      {/* ── Page header ── */}
      <div className="bg-secondary py-16 sm:py-20 md:py-28 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Restaurant})` }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ background: "radial-gradient(circle at 50% 50%, #e0996e, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative z-10 px-4"
        >
          <span className="font-source text-tertiary tracking-[0.45em] text-xs uppercase block mb-4">
            Angus Quay
          </span>
          <h1 className="font-fjalla text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            Our Menu
          </h1>
          <div className="w-12 h-px bg-tertiary mx-auto mt-6" />
          <p className="font-source text-primary/45 text-[10px] sm:text-xs mt-5 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            All dishes freshly prepared · Allergen info available on request
          </p>
        </motion.div>
      </div>

      {/* ── Main layout ── */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">

          {/* ── Left: sticky image panel (desktop only) ── */}
          <div className="hidden lg:block lg:w-[38%] sticky top-8 self-start">
            <div className="relative overflow-hidden aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={sectionImages[activeTab]}
                  alt={activeTab}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + "-label"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease }}
                  >
                    <span className="font-source text-tertiary tracking-[0.4em] text-[10px] uppercase block mb-2">
                      {sectionSubtitles[activeTab]}
                    </span>
                    <h2 className="font-fjalla text-primary text-4xl tracking-tight">
                      {activeTab}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-tertiary/40" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-tertiary/40" />
            </div>

            <p className="font-source text-secondary/35 text-xs tracking-wide leading-relaxed mt-5">
              Prices include VAT · 10% service charge for parties of 6+
            </p>
          </div>

          {/* ── Right: tabs + menu items ── */}
          <div className="w-full lg:flex-1 min-w-0">

            {/* Tab navigation */}
            <div className="border-b border-secondary/15 mb-6 sm:mb-8">
              <div className="flex overflow-x-auto scrollbar-none">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative font-source text-[10px] sm:text-xs tracking-[0.28em] sm:tracking-[0.3em] uppercase px-4 sm:px-5 py-4 whitespace-nowrap transition-colors duration-300 flex-shrink-0 ${
                      activeTab === tab
                        ? "text-secondary"
                        : "text-secondary/35 hover:text-secondary/65"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="menu-tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-px bg-tertiary"
                        transition={{ duration: 0.32, ease }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile / tablet: section banner */}
            <div className="lg:hidden mb-6 sm:mb-8 relative overflow-hidden h-36 sm:h-48 md:h-56">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab + "-mobile"}
                  src={sectionImages[activeTab]}
                  alt={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-secondary/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + "-mobile-label"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <span className="font-source text-tertiary tracking-[0.35em] text-[9px] uppercase block mb-1">
                      {sectionSubtitles[activeTab]}
                    </span>
                    <h2 className="font-fjalla text-primary text-2xl sm:text-3xl md:text-4xl tracking-tight">
                      {activeTab}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Menu items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.32, ease }}
              >
                {menu[activeTab].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.38, ease }}
                    className="py-4 sm:py-5 border-b border-secondary/10 last:border-b-0"
                  >
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      <h3 className="font-fjalla text-secondary text-base sm:text-lg tracking-wide shrink-0">
                        {item.name}
                      </h3>
                      <span
                        className="flex-1 border-b border-dotted border-secondary/20 mb-1"
                        aria-hidden="true"
                      />
                      <span className="font-fjalla text-tertiary text-base sm:text-lg tracking-wide shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-source text-secondary/45 text-xs sm:text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                ))}

                {/* Footer note */}
                <div className="mt-10 pt-6 border-t border-secondary/10 text-center space-y-1.5">
                  <p className="font-source text-secondary/30 text-[10px] sm:text-xs tracking-wide leading-relaxed">
                    Prices include VAT · A discretionary 10% service charge will be added to tables of 6 or more
                  </p>
                  <p className="font-source text-secondary/30 text-[10px] sm:text-xs tracking-wide">
                    Please inform your server of any allergies or dietary requirements before ordering
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
