"use client"
import { Link } from "react-router-dom"
import { BookOpen, Heart, Lightbulb, Globe } from "lucide-react"
import "./CategorySection.css"

const categories = [
  {
    id: "stories",
    name: "Stories",
    description: "Personal narratives and experiences",
    icon: BookOpen,
    color: "#FF8FB1",
  },
  {
    id: "health",
    name: "Health",
    description: "Wellness tips for mothers",
    icon: Heart,
    color: "#FCB5AC",
  },
  {
    id: "inspiration",
    name: "Inspiration",
    description: "Motivational content for moms",
    icon: Lightbulb,
    color: "#B6FFCE",
  },
  {
    id: "culture",
    name: "Culture",
    description: "Traditions and celebrations",
    icon: Globe,
    color: "#C5A3FF",
  },
]

const CategorySection = ({ onCategorySelect }) => {
  return (
    <section className="category-section">
      <div className="section-header">
        <h2>Explore by Category</h2>
        <p>Discover content tailored to different aspects of motherhood</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={`/?category=${category.name}`}
            key={category.id}
            className="category-card"
            onClick={(e) => {
              e.preventDefault()
              onCategorySelect(category.name)
            }}
          >
            <div className="category-icon" style={{ backgroundColor: category.color }}>
              <category.icon size={24} />
            </div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
