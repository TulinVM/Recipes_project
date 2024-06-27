import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetail.css";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/recipes/${id}/`) // Убедитесь, что URL правильный
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <table>
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <h2>Ингредиенты</h2>
        <p>{recipe.ingredients}</p>
        <h2>Рецепт приготовления</h2>
        <p>{recipe.instructions}</p>
      </div>
    </table>
  );
}

export default RecipeDetail;
