import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/categories/${id}/`) // Убедитесь, что URL правильный
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, [id]);

  if (!category) return <div>Loading...</div>;

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <h2>Рецепты</h2>
      <ul>
        {category.recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetail;
