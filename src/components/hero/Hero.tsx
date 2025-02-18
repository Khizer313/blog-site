import CategoryDropdowns from './CategoryDropdowns';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block">
          <CategoryDropdowns />
        </div>
        <div className="md:col-span-3">
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}