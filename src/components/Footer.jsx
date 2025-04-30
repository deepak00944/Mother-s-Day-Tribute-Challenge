import { Heart } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              Mother's Day<span>Tribute</span>
            </h2>
            <p>Celebrating the strength, love, and wisdom of mothers everywhere.</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/?category=Stories">Stories</a>
                </li>
                <li>
                  <a href="/?category=Health">Health</a>
                </li>
                <li>
                  <a href="/?category=Inspiration">Inspiration</a>
                </li>
                <li>
                  <a href="/?category=Culture">Culture</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Connect</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Submit a Story</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mother's Day Tribute. All rights reserved.</p>
          <p>
            Made with <Heart size={16} className="heart-icon" /> for mothers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
