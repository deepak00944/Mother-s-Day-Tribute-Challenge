"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import Sidebar from "../components/Sidebar"
import articles from "../data/articles"
import "./ArticleDetailPage.css"

const ArticleDetailPage = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundArticle = articles.find((a) => a.id === Number.parseInt(id))

    if (foundArticle) {
      setArticle(foundArticle)
    }

    setLoading(false)
  }, [id])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!article) {
    return (
      <div className="container article-not-found">
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="article-detail-page">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Articles</span>
        </Link>

        <div className="content-layout">
          <article className="article-content">
            <div className="article-header">
              <span className="article-category">{article.category}</span>
              <h1>{article.title}</h1>
              <div className="article-meta">
                <div className="meta-item">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{article.readingTime} min read</span>
                </div>
              </div>
            </div>

            <div className="article-featured-image">
              <img src={article.image || "/placeholder.svg"} alt={article.title} />
            </div>

            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />

            <div className="article-tags">
              <span className="tag-label">Tags:</span>
              <span className="tag">{article.category}</span>
              <span className="tag">Mother's Day</span>
              <span className="tag">Tribute</span>
            </div>

            <div className="article-share">
              <span>Share this article:</span>
              <div className="share-buttons">
                <button className="share-button">Facebook</button>
                <button className="share-button">Twitter</button>
                <button className="share-button">Pinterest</button>
              </div>
            </div>

            <div className="related-articles">
              <h3>More Articles in {article.category}</h3>
              <div className="related-articles-grid">
                {articles
                  .filter((a) => a.category === article.category && a.id !== article.id)
                  .slice(0, 3)
                  .map((relatedArticle) => (
                    <div key={relatedArticle.id} className="related-article-card">
                      <div className="related-article-image">
                        
                      <img src={relatedArticle.image || "/placeholder.svg"} alt={relatedArticle.title} />
                      </div>
                      <div className="related-article-content">
                        <h4>{relatedArticle.title}</h4>
                        <div className="related-article-meta">
                          <Clock size={14} />
                          <span>{relatedArticle.readingTime} min read</span>
                        </div>
                        <Link to={`/articles/${relatedArticle.id}`} className="btn btn-sm">
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </article>

          <div className="sidebar-container">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailPage
