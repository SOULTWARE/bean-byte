import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Coffee Menu</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover our selection of premium coffee beans and expertly crafted beverages.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Tech Events</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join our weekly tech meetups and coding sessions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
