"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./HeroCarousel.css"

const HeroCarousel = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredArticles = articles.slice(0, 3) //three articlees

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1))
  }
// Slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {featuredArticles.map((article, index) => (
          <div
            key={article.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <div className="carousel-content">
              <span className="article-category">{article.category}</span>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-author">By {article.author}</span>
                <span className="article-date">{article.date}</span>
                <span className="article-reading-time">{article.readingTime} min read</span>
              </div>
              <Link to={`/articles/${article.id}`} className="btn">
                Read More
              </Link>
            </div>
          </div>
        ))}

        <button className="carousel-arrow prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="carousel-arrow next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>

        <div className="carousel-indicators">
          {featuredArticles.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
