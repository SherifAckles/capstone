import React from 'react'
import CategoryItem from "../category-item/Category-item.component";
import "./directory.styles.scss"


function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}

export default Directory