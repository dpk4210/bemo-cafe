import React, { useState } from 'react';
import { MENU_ITEMS, Category, MenuItem } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-bemo-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-bemo-primary font-medium tracking-widest uppercase mb-2">Our Selection</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Curated for Taste</h3>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', ...Object.values(Category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category | 'All')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-bemo-primary border-bemo-primary text-bemo-dark' 
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-bemo-primary hover:text-bemo-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group bg-bemo-secondary rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-bemo-primary/10 transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.popular && (
          <div className="absolute top-4 right-4 bg-bemo-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            POPULAR
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-white group-hover:text-bemo-primary transition-colors">
            {item.name}
          </h4>
          <span className="text-bemo-primary font-bold text-lg">{item.price}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
          {item.category}
        </div>
      </div>
    </div>
  );
};

export default Menu;