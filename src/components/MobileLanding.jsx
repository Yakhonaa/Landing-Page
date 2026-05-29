import { useEffect, useState } from 'react'

function MobileLanding() {
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const SCROLL_THRESHOLD = 400

    function handleScroll() {
      setShowStickyBar(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    function handleDocClick(event) {
      if (!event.target.closest('.Navbar')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [isMenuOpen])

  return (
    <main className="min-h-screen">
      <section>
        <div className="Navbar">
          <a className="navbar-brand" href="#top">
            <img src="public/icon_foreground.png" alt="Loochon" className="logo" />
            <span className="navbar-brand-name">Loochon</span>
          </a>
          <button
            className={isMenuOpen ? 'button-icon button-icon--open' : 'button-icon'}
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isMenuOpen && (
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <a href="#privacy" onClick={() => setIsMenuOpen(false)}>
                  Privacy Policy
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#terms" onClick={() => setIsMenuOpen(false)}>
                  Terms of Service
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="top-header-content">
              <h1 className="left-header-content-title">Hire and Offer</h1>
              <h2 className="left-header-content-subtitle">
                with <span className="Loochon-highlight">Loochon</span>
              </h2>
            </div>
        <div className="first-header"> 
          <div className="left-header">
            <div className="left-header-content-description">
              <p>We are Colombia's first freelance platform, which maps major cities
                down to regional municipalities</p>
            </div>
          </div>
          <div className="right-header">
            <div className="right-header-content">
              <div className="image-stack">
                <div className="phone-mock">
                  <span className="phone-mock-notch"></span>
                  <img src="/offer.jpg" className="phone-mock-screen" alt="Offer preview" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stripe-wrapper">
          <div className="diagonal-stripe"></div>
        </div>
        <div className="left-header-content-buttons-container">
          <div className="left-header-content-buttons">
              <button className="left-header-content-button">Get Started</button>
            </div>
        </div>
        <h3 className="quick-overall-content-title">Reach out to professionals anywhere across <span className="highlight">Colombia</span></h3>
        <ul className="quick-overall">
          <li className="quick-overall-content quick-overall-content-description">
            Join a thriving community of professionals all around the country
          </li>
          <li className="quick-overall-content quick-overall-content-description">
            Hire any kind of specialist, or offer your 
            skills in your region
          </li>
        </ul>
        <div className="stripe-wrapper">
          <div className="diagonal-stripe-2"></div>
        </div>
        <div className="get-started-container">
            <h3 className="get-started-title">Get started</h3>
          </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title">Hire specialists quickly</h3>
          <p className="hire-specialists-description">
            Reach out to an expert in your area in less than a minute.
            Our platform is designed to be easy to use and navigate, so you can get the 
            job done quickly and efficiently.
          </p>
          <div className="stripe-wrapper">
            <div className="diagonal-stripe-3"></div>
          </div>
          <div className="prestadores-image-container-wrapper">
            <div className="prestadores-container">
              <img src="/prestadores.jpg" className="prestadores-image" alt="Hire specialists" />
            </div>
          </div>
        </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title">Let others find you</h3>
          <div className="stripe-wrapper">
            <div className="diagonal-stripe-6"></div>
          </div>
          <p className="hire-specialists-description">
            Create a profile and let others know about your skills and services.
            Get hired for your next project and expand your career opportunities, 
            or start your own business and grow your network.
          </p>
          <div className="stripe-wrapper">
            <div className="diagonal-stripe-4"></div>
          </div>
          <div className="prestadores-image-container-wrapper second-prestadores-container">
            <div className="prestadores-container">
              <img src="/prestadores.jpg" className="prestadores-image" alt="Hire specialists" />
            </div>
          </div>
        </div>
        <div className="hire-specialists-container">
        <div className="stripe-wrapper">
            <div className="diagonal-stripe-7"></div>
          </div>
          <h3 className="hire-specialists-title-special-2">Use both sides of the platform</h3>
          <p className="hire-specialists-description">
          Why limit yourself? Our platform is designed for the modern ecosystem where you 
          might be an employer today and a creator tomorrow. We’ve built a 
          comprehensive marketplace supporting over 200 distinct job categories, 
          ensuring that no matter how niche your project or skill set is, you have a home here.
          </p>
        </div>

        <div className="popular-jobs-container">
          <h3 className="popular-jobs-title">Find your niche in:</h3>
          <ul className="popular-jobs-list">
            <li className="popular-jobs-item">⚡ Electrician</li>
            <li className="popular-jobs-item">🔧 Plumber</li>
            <li className="popular-jobs-item">🧹 House Cleaner</li>
            <li className="popular-jobs-item">🪚 Carpenter</li>
            <li className="popular-jobs-item">🎨 Painter</li>
            <li className="popular-jobs-item">🌱 Gardener</li>
            <li className="popular-jobs-item">🔨 Handyman</li>
            <li className="popular-jobs-item">💇 Hairdresser</li>
            <li className="popular-jobs-item">🏋️ Personal Trainer</li>
            <li className="popular-jobs-item">🔩 Mechanic</li>
            <li className="popular-jobs-item">💻 Web Developer</li>
            <li className="popular-jobs-item">🎨 Graphic Designer</li>
            <li className="popular-jobs-item">✍️ Copywriter</li>
            <li className="popular-jobs-item">📱 Mobile Developer</li>
            <li className="popular-jobs-item">📊 Data Analyst</li>
            <li className="popular-jobs-item">🎬 Video Editor</li>
            <li className="popular-jobs-item">📈 SEO Specialist</li>
            <li className="popular-jobs-item">💼 Virtual Assistant</li>
            <li className="popular-jobs-item">🎯 Marketing Strategist</li>
            <li className="popular-jobs-item">🤖 AI Engineer</li>
          </ul>
        </div>

        <div className="stripe-wrapper">
            <div className="diagonal-stripe-5"></div>
          </div>

        <div className="why-us-container">
          <h3 className="why-us-title">Why Loochon?</h3>
          <div className="why-us-description">

            <h4 className="highlight-list">🇨🇴 100% Colombian Coverage</h4>
            <ul className="why-us-sublist">
              <li>Maps every major hub and regional municipality across Colombia.</li>
              <li>Search and filter by exact location to find experts near you.</li>
            </ul>

            <h4 className="highlight-list">🛠️ 200+ Industries At Your Fingertips</h4>
            <ul className="why-us-sublist">
              <li>Hands-on services: electricians, cleaners, construction experts and more.</li>
              <li>Specialized trade and online work across 200+ categories.</li>
            </ul>

            <h4 className="highlight-list">💬 Real-Time, Direct Communication</h4>
            <ul className="why-us-sublist">
              <li>Skip the agency red tape and chat with verified experts directly.</li>
              <li>Collaborate, negotiate, and track every project in one place.</li>
            </ul>

          </div>
        </div>

        <div className="stripe-wrapper">
          <div className="diagonal-stripe-8"></div>
        </div>

        <footer className="credibility-section">
          <div className="credibility-column">
            <h3 className="credibility-title">Social Media</h3>
            <ul className="credibility-list">
              <li className="credibility-item credibility-item--social">
                <a
                  className="social-link social-link--tiktok"
                  href="https://www.tiktok.com/@loochonmedia"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="TikTok @loochonmedia"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
                  </svg>
                  <span>loochonmedia</span>
                </a>
              </li>
              <li className="credibility-item credibility-item--social">
                <a
                  className="social-link social-link--youtube"
                  href="https://www.youtube.com/@loochonmedia"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="YouTube @loochonmedia"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
                  </svg>
                  <span>loochonmedia</span>
                </a>
              </li>
              <li className="credibility-item credibility-item--social">
                <a
                  className="social-link social-link--facebook"
                  href="https://www.facebook.com/loochonmedia"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook loochonmedia"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.96h-1.52c-1.49 0-1.95.93-1.95 1.87V12h3.33l-.53 3.47h-2.8v8.38A12 12 0 0 0 24 12z" />
                  </svg>
                  <span>loochonmedia</span>
                </a>
              </li>
              <li className="credibility-item credibility-item--social">
                <a
                  className="social-link social-link--instagram"
                  href="https://www.instagram.com/loochonmedia"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram @loochonmedia"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.13 5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                  <span>loochonmedia</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="credibility-column">
            <h3 className="credibility-title">Contact Us</h3>
            <ul className="credibility-list">
              <li className="credibility-item">support@gmail.com</li>
              <li className="credibility-item">Bogotá, Colombia</li>
              <li className="credibility-item">Help Center</li>
              <li className="credibility-item">WhatsApp</li>
            </ul>
          </div>
        </footer>

      </section>

      <div
        className={
          showStickyBar
            ? 'sticky-bottom-bar sticky-bottom-bar--visible'
            : 'sticky-bottom-bar'
        }
      >
        <div className="sticky-bottom-bar-content">
        <div className="left-header-content-buttons-container-2">
          <div className="left-header-content-buttons-2">
              <button className="left-header-content-button-2">Get Started</button>
            </div>
        </div>
        </div>
      </div>
    </main>
  )
}

export default MobileLanding
