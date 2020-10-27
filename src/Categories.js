import React from 'react';

const Categories = ({ category, filterItems }) => {
  return (
    <div className="btn-container">
      {category.map((group, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(group)}
          >
            {group}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
