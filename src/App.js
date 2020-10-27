import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState([]);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
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
// 3) in Menu component, we'll access the properties from the data component in its parameter
// 4) create a map() method which we will destructured each prop
// 5) structure the jsx for Menu component
// 6) will need to setup a filter() method for the category prop which will list the menu items based on category

// two approaches that will be taken: manual and dynamic
// 7a) create a function that will take in a string and want to iterate the original array (items from the data component)
// 8a) setup a filter() method to the original array (items) and if an item category matches the string that is passing in then return it to the new variable
// 9a) invoke the state function passing the new variable that filters the category prop
// 10a) create a key attribute that access the filter function in the Categories component
// 11a) create buttons that will invoke the filter function once clicked on
