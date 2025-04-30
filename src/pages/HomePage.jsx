"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import HeroCarousel from "../components/HeroCarousel"
import CategorySection from "../components/CategorySection"
import ArticlesList from "../components/ArticlesList"
import Pagination from "../components/Pagination"
import Sidebar from "../components/Sidebar"
import articles from "../data/articles"
import "./HomePage.css"

const ARTICLES_PER_PAGE = 6

const HomePage = () => {
  const location = useLocation()
  const [searchParams] = useState(new URLSearchParams(location.search))
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [currentArticles, setCurrentArticles] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState("next")

  // Filter articles based on category and search term
  useEffect(() => {
    let filtered = [...articles]

    // Filter by category if selected
    if (selectedCategory) {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    // Filter by search term if provided
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (article) => article.title.toLowerCase().includes(term) || article.excerpt.toLowerCase().includes(term),
      )
    }

    setFilteredArticles(filtered)

    // Reset to first page when filters change
    setCurrentPage(1)

    // Calculate total pages
    setTotalPages(Math.ceil(filtered.length / ARTICLES_PER_PAGE))
  }, [selectedCategory, searchTerm])

  // Update current articles when page or filtered articles change
  useEffect(() => {
    const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE
    const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE
    setCurrentArticles(filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle))
  }, [currentPage, filteredArticles])

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category)
  }

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // Handle page change with animation
  const handlePageChange = (pageNumber) => {
    if (pageNumber === currentPage) return

    // Set transition direction
    setTransitionDirection(pageNumber > currentPage ? "next" : "prev")

    // Start transition
    setIsTransitioning(true)

    // After a short delay, change the page
    setTimeout(() => {
      setCurrentPage(pageNumber)

      // End transition after the page change
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 300)
  }

  return (
    <div className="home-page">
      <HeroCarousel articles={articles} />

      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <CategorySection onCategorySelect={handleCategorySelect} />

        <div className="content-layout">
          <div className="main-content">
            <div className={`articles-container ${isTransitioning ? "transitioning" : ""} ${transitionDirection}`}>
              <ArticlesList
                articles={currentArticles}
                title={selectedCategory ? `Articles in ${selectedCategory}` : "Recent Articles"}
              />
            </div>

            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
          </div>
          <div className="sidebar-container">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
