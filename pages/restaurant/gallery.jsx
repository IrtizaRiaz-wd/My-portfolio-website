import Head from 'next/head';
import RestaurantNav from '../../components/RestaurantNav';
import RestaurantFooter from '../../components/RestaurantFooter';

const galleryImages = [
  { title: 'Restaurant Interior', category: 'Dining' },
  { title: 'Chef Marcus at Work', category: 'Team' },
  { title: 'Wagyu Ribeye', category: 'Dishes' },
  { title: 'Open Kitchen', category: 'Kitchen' },
  { title: 'Plated Salmon', category: 'Dishes' },
  { title: 'Private Dining Room', category: 'Dining' },
  { title: 'Dessert Presentation', category: 'Dishes' },
  { title: 'Bar Area', category: 'Dining' },
  { title: 'Chef in Action', category: 'Team' },
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Ember & Plate</title>
        <meta name="description" content="View our restaurant gallery and culinary creations." />
      </Head>

      <RestaurantNav />

      <main className="flex-1">
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-ember-900 mb-4">Gallery</h1>
            <p className="text-ember-700 text-lg">A glimpse into our restaurant and culinary creations</p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-ember-600 to-ember-900 hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-white/80 text-sm mt-2">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </>
  );
}
