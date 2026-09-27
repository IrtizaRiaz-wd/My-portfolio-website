import Head from 'next/head';
import Link from 'next/link';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';
import { useState } from 'react';

const menuItems = {
  starters: [
    { name: 'Burrata & Heirloom Tomatoes', description: 'Fresh burrata with basil oil and aged balsamic', price: '$14' },
    { name: 'Seared Foie Gras', description: 'Seared foie gras with fig compote and brioche', price: '$18' },
    { name: 'Oyster Selection', description: 'Three fresh oysters with mignonette', price: '$16' },
    { name: 'Shrimp Bisque', description: 'Creamy shrimp bisque with cognac and crème fraîche', price: '$12' },
  ],
  mains: [
    { name: 'Pan-Seared Salmon', description: 'Norwegian salmon with seasonal vegetables and lemon beurre blanc', price: '$32' },
    { name: 'Wagyu Ribeye', description: 'Premium Japanese Wagyu with truffle mash and red wine reduction', price: '$52' },
    { name: 'Lobster Tail', description: 'Fresh Atlantic lobster tail with drawn butter and herb seasoning', price: '$45' },
    { name: 'Duck Breast', description: 'Roasted duck breast with cherry gastrique and duck fat potatoes', price: '$36' },
  ],
  desserts: [
    { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: '$9' },
    { name: 'Crème Brûlée', description: 'Classic vanilla bean crème brûlée with caramelized sugar', price: '$8' },
    { name: 'Strawberry Shortcake', description: 'Layers of sponge cake, fresh strawberries, and whipped cream', price: '$10' },
  ],
  drinks: [
    { name: 'House Wine Selection', description: 'Premium selection of reds and whites', price: '$8-$12/glass' },
    { name: 'Craft Cocktails', description: 'Seasonal cocktails made with premium spirits', price: '$12-$16' },
    { name: 'Espresso', description: 'Premium espresso drinks', price: '$4-$6' },
  ],
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('starters');

  const categories = Object.keys(menuItems);

  return (
    <>
      <Head>
        <title>Menu - Ember & Plate</title>
        <meta name="description" content="Explore our premium menu items at Ember & Plate." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-ember-900 mb-4">Menu</h1>
            <p className="text-ember-700 text-lg">Seasonal offerings from our culinary team</p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Category Filter */}
            <div className="flex gap-4 mb-12 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition capitalize ${
                    selectedCategory === category
                      ? 'bg-ember-900 text-cream'
                      : 'bg-cream border-2 border-ember-900 text-ember-900 hover:bg-cream'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {menuItems[selectedCategory].map((item, idx) => (
                <div key={idx} className="border-b-2 border-ember-900/10 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-ember-900">{item.name}</h3>
                    <span className="text-ember-600 font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-ember-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-cream p-8 rounded-lg">
              <p className="text-ember-800 mb-4">Questions about ingredients or allergies?</p>
              <Link
                href="/restaurant/contact"
                className="inline-block px-6 py-3 bg-ember-900 text-cream rounded font-semibold hover:bg-ember-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
