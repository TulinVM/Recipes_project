import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <div className="button">
            <button>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "normal")}
                to={"/"}
              >
                Главное меню
              </NavLink>
            </button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
