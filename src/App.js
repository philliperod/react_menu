import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
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

// MANUAL APPROACH
// 7a) create a function that will take in a string and want to iterate the original array (items from the data component)
// 8a) setup a filter() method to the original array (items) and if an item category matches the string that is passing in then return it to the new variable
// 9a) invoke the state function passing the new variable that filters the category prop
// 10a) create a key attribute that access the filter function in the Categories component
// 11a) create buttons that will invoke the filter function once clicked on
// ISSUES: lack of a button that has a functionality for 'all' meaning a reset button; and not in sync with the data meaning that you will have to manually update the data if there is a change to the original array
// 12a) now to create a condition within the filter function that if the string is equal to 'all' then to showcase all the items in the array

// DYNAMIC APPROACH
// want to filter the category and obtain the unique values even if the array changes
// 7b) setup a function that will only get the unique value (in category) using the new Set() method [data structure]
// 8b) you'll also need to set it into an array (it currently sets into an object)
// 9b) you set the initial value in the array ('all'), then use the spread operator to iterate the rest of the categories
// console.log will show: ['all', 'breakfast', 'lunch', 'shakes']
