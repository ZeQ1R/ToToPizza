import React from 'react';
import { menuData } from '../mock';
import { Pizza, Soup, UtensilsCrossed, Coffee, IceCream } from 'lucide-react';

const Menu = () => {
  const categories = [
    {
      title: 'Starters',
      icon: <Soup size={32} />,
      items: menuData.starters
    },
    {
      title: 'Pizzas',
      icon: <Pizza size={32} />,
      items: menuData.pizzas
    },
    {
      title: 'Pasta',
      icon: <UtensilsCrossed size={32} />,
      items: menuData.pasta
    },
    {
      title: 'Desserts',
      icon: <IceCream size={32} />,
      items: menuData.desserts
    },
    {
      title: 'Drinks',
      icon: <Coffee size={32} />,
      items: menuData.drinks
    }
  ];

  return (
    <div className="page-menu">
      <section className="menu-hero">
        <div className="menu-hero-container">
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">
            Discover our selection of authentic Italian dishes, made fresh daily with love
          </p>
        </div>
      </section>

      <section className="menu-content">
        <div className="menu-container">
          {categories.map((category, index) => (
            <div key={index} className="menu-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h2 className="category-title">{category.title}</h2>
              </div>
              <div className="menu-items">
                {category.items.map((item) => (
                  <div key={item.id} className="menu-item">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
