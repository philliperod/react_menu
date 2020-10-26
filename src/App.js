import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

// 1) need to create two useState hooks - one for each properties of the data object and one for the property categories
// the default value for the first hook will be the props from the data object
// the default value for the second hook will be an empty array
// 2) structured your jsx
