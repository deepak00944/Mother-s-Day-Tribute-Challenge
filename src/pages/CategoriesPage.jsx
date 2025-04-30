import { Link } from "react-router-dom"
import articles from "../data/articles"
import "./CategoriesPage.css"

const CategoriesPage = () => {
  // Get unique categories
  const categories = [...new Set(articles.map((article) => article.category))]

  return (
    <div className="categories-page">
      <div className="container">
        <h1 className="page-title">Categories</h1>

        <div className="categories-container">
          {categories.map((category) => (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="category-articles">
                {articles
                  .filter((article) => article.category === category)
                  .map((article) => (
                    <div key={article.id} className="category-article-card">
                      <div className="category-article-image">
                        <img src={article.image || "/placeholder.svg"} alt={article.title} />
                        <span className="article-category">{article.category}</span>
                      </div>
                      <div className="category-article-content">
                        <h3>{article.title}</h3>
                        <p>{article.excerpt}</p>
                        <div className="article-meta">
                          <span className="article-author">By {article.author}</span>
                          <span className="article-reading-time">{article.readingTime} min read</span>
                        </div>
                        <Link to={`/articles/${article.id}`} className="btn btn-outline">
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage
