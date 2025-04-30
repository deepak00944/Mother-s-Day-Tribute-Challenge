import { Link } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section author-profile">
        <div className="author-image">
          <img src="author.jpg" alt="Author" />
        </div>
        <h3>About the Author</h3>
        <p>
          Welcome to our Mother's Day Tribute Blog! I'm Emma, a writer and mother of two, passionate about sharing
          stories that celebrate the journey of motherhood.
        </p>
        <Link to="#" className="btn btn-outline btn-sm">
          Read More
        </Link>
      </div>

      <div className="sidebar-section highlights">
        <h3>Highlights</h3>
        <ul className="highlights-list">
          <li>
            <Link to="#">Mother's Day Gift Ideas</Link>
            <span>May 1, 2023</span>
          </li>
          <li>
            <Link to="#">Celebrating Single Moms</Link>
            <span>May 3, 2023</span>
          </li>
          <li>
            <Link to="#">Self-Care for Mothers</Link>
            <span>May 5, 2023</span>
          </li>
          <li>
            <Link to="#">Letters to Mom</Link>
            <span>May 7, 2023</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-section newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest articles and updates delivered to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit" className="btn">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  )
}

export default Sidebar
