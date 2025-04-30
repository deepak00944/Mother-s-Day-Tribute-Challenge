import { Link } from "react-router-dom"
import { Clock } from "lucide-react"
import "./ArticlesList.css"

const ArticlesList = ({ articles, title = "Recent Articles" }) => {
  return (
    <section className="articles-section">
      <div className="section-header">
        <h2>{title}</h2>
        {articles.length === 0 && <p>No articles found in this category.</p>}
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-image">
              <img src={article.image || "/placeholder.svg"} alt={article.title} />
              <span className="article-category">{article.category}</span>
            </div>
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-author">By {article.author}</span>
                <span className="article-reading-time">
                  <Clock size={14} />
                  {article.readingTime} min read
                </span>
              </div>
              <Link to={`/articles/${article.id}`} className="btn btn-outline">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ArticlesList
