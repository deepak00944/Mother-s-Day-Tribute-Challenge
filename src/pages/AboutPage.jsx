import { Linkedin, Instagram, Facebook, Twitter, Briefcase } from "lucide-react"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">About Me</h1>

        <div className="about-content">
          <div className="about-intro">
            <h2>My name is Deepak Singh</h2>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/deepak-singh-566787172/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/_deepak094_/?next=%2F" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/deepaksingh7898/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/deepak_094" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={24} />
              </a>
              <a href="https://deepak00944.github.io/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Briefcase size={24} />
              </a>
            </div>

            <p>
              Welcome to my Mother's Day Tribute Blog! I'm passionate about celebrating the incredible journey of
              motherhood and sharing stories that inspire, educate, and connect mothers from all walks of life.
            </p>
          </div>

          <div className="about-image-container">
            <img src="image.jpg" alt="Deepak Singh" className="about-image" />
          </div>

          <div className="about-description">
            <p>
              With over 5 years of experience in content creation and digital storytelling, I've dedicated my career to
              amplifying the voices of mothers and creating a supportive community where their experiences are valued
              and shared.
            </p>

            <p>
              My journey began when I noticed a lack of authentic content that truly captured the complexity and beauty
              of motherhood. Through this blog, I aim to provide a platform where mothers can find relatable stories,
              practical advice, and a sense of belonging.
            </p>

            <p>
              When I'm not writing or curating content for the blog, you can find me enjoying quality time with my
              family, exploring new hiking trails, or experimenting with new recipes in the kitchen. I believe in the
              power of storytelling to create connections and foster understanding, and I'm grateful for the opportunity
              to share these stories with you.
            </p>

            <p>
              Thank you for visiting my blog. I hope you find inspiration, comfort, and community here. Feel free to
              reach out through the contact page or connect with me on social media. I'd love to hear your story!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
