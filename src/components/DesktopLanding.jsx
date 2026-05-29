import { useEffect, useState } from 'react'
import './DesktopLanding.css'

const POPULAR_JOBS = [
  '⚡ Electrician',
  '🔧 Plumber',
  '🧹 House Cleaner',
  '🪚 Carpenter',
  '🎨 Painter',
  '🌱 Gardener',
  '🔨 Handyman',
  '💇 Hairdresser',
  '🏋️ Personal Trainer',
  '🔩 Mechanic',
  '💻 Web Developer',
  '🎨 Graphic Designer',
  '✍️ Copywriter',
  '📱 Mobile Developer',
  '📊 Data Analyst',
  '🎬 Video Editor',
  '📈 SEO Specialist',
  '💼 Virtual Assistant',
  '🎯 Marketing Strategist',
  '🤖 AI Engineer',
]

const FEATURES = [
  {
    title: 'Hire specialists quickly',
    body: 'Reach out to an expert in your area in less than a minute. Our platform is designed to be easy to use and navigate, so you can get the job done quickly and efficiently.',
  },
  {
    title: 'Let others find you',
    body: 'Create a profile and let others know about your skills and services. Get hired for your next project and expand your career opportunities, or start your own business and grow your network.',
  },
  {
    title: 'Use both sides of the platform',
    body: 'Why limit yourself? Be an employer today and a creator tomorrow. We support over 200 distinct job categories, so no matter how niche your project or skill set is, you have a home here.',
  },
]

const WHY_US = [
  {
    title: '🇨🇴 100% Colombian Coverage',
    points: [
      'Maps every major hub and regional municipality across Colombia.',
      'Search and filter by exact location to find experts near you.',
    ],
  },
  {
    title: '🛠️ 200+ Industries At Your Fingertips',
    points: [
      'Hands-on services: electricians, cleaners, construction experts and more.',
      'Specialized trade and online work across 200+ categories.',
    ],
  },
  {
    title: '💬 Real-Time, Direct Communication',
    points: [
      'Skip the agency red tape and chat with verified experts directly.',
      'Collaborate, negotiate, and track every project in one place.',
    ],
  },
]

const SOCIALS = [
  {
    key: 'tiktok',
    label: 'TikTok @loochonmedia',
    href: 'https://www.tiktok.com/@loochonmedia',
    path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z',
  },
  {
    key: 'youtube',
    label: 'YouTube @loochonmedia',
    href: 'https://www.youtube.com/@loochonmedia',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z',
  },
  {
    key: 'facebook',
    label: 'Facebook loochonmedia',
    href: 'https://www.facebook.com/loochonmedia',
    path: 'M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.96h-1.52c-1.49 0-1.95.93-1.95 1.87V12h3.33l-.53 3.47h-2.8v8.38A12 12 0 0 0 24 12z',
  },
  {
    key: 'instagram',
    label: 'Instagram @loochonmedia',
    href: 'https://www.instagram.com/loochonmedia',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.13 5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
  },
]

function DesktopLanding() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="dt">
      <header className={scrolled ? 'dt-nav dt-nav--scrolled' : 'dt-nav'}>
        <div className="dt-container dt-nav-inner">
          <a className="dt-brand" href="#top">
            <img src="/icon_foreground.png" alt="Loochon" className="dt-logo" />
            <span>Loochon</span>
          </a>
          <nav className="dt-nav-links">
            <a href="#features">Features</a>
            <a href="#jobs">Jobs</a>
            <a href="#why">Why us</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <button className="dt-btn dt-btn--primary" type="button">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="dt-hero">
          <div className="dt-container dt-hero-inner">
            <div className="dt-hero-copy">
              <h1 className="dt-hero-title">
                Hire and Offer with <span className="dt-accent">Loochon</span>
              </h1>
              <p className="dt-hero-sub">
                Colombia's first freelance platform, mapping major cities down to
                regional municipalities. Find the right professional, or offer your
                skills, anywhere in the country.
              </p>
              <div className="dt-hero-actions">
                <button className="dt-btn dt-btn--primary dt-btn--lg" type="button">
                  Get Started
                </button>
                <button className="dt-btn dt-btn--ghost dt-btn--lg" type="button">
                  Explore jobs
                </button>
              </div>
            </div>
            <div className="dt-hero-media">
              <img src="/offer.jpg" alt="Offer preview" className="dt-hero-img dt-hero-img--front" />
              <img src="/prestadores.jpg" alt="Hire specialists" className="dt-hero-img dt-hero-img--back" />
            </div>
          </div>
        </section>

        <section className="dt-band">
          <div className="dt-container">
            <h2 className="dt-band-title">
              Reach out to professionals anywhere across{' '}
              <span className="dt-accent">Colombia</span>
            </h2>
            <div className="dt-band-stats">
              <div className="dt-stat">
                <span className="dt-stat-num">200+</span>
                <span className="dt-stat-label">job categories</span>
              </div>
              <div className="dt-stat">
                <span className="dt-stat-num">100%</span>
                <span className="dt-stat-label">Colombian coverage</span>
              </div>
              <div className="dt-stat">
                <span className="dt-stat-num">24/7</span>
                <span className="dt-stat-label">direct messaging</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="dt-section">
          <div className="dt-container">
            <h2 className="dt-section-title">Get started</h2>
            <div className="dt-feature-grid">
              {FEATURES.map((feature) => (
                <article className="dt-card" key={feature.title}>
                  <h3 className="dt-card-title">{feature.title}</h3>
                  <p className="dt-card-body">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="jobs" className="dt-section dt-section--muted">
          <div className="dt-container">
            <h2 className="dt-section-title">Find your niche in</h2>
            <ul className="dt-jobs-grid">
              {POPULAR_JOBS.map((job) => (
                <li className="dt-job" key={job}>
                  {job}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="why" className="dt-section">
          <div className="dt-container">
            <h2 className="dt-section-title">Why Loochon?</h2>
            <div className="dt-why-grid">
              {WHY_US.map((item) => (
                <article className="dt-why-card" key={item.title}>
                  <h3 className="dt-why-title">{item.title}</h3>
                  <ul className="dt-why-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dt-cta">
          <div className="dt-container dt-cta-inner">
            <h2 className="dt-cta-title">Ready to get to work?</h2>
            <button className="dt-btn dt-btn--primary dt-btn--lg" type="button">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <footer className="dt-footer">
        <div className="dt-container dt-footer-inner">
          <div className="dt-footer-brand">
            <img src="/icon_foreground.png" alt="Loochon" className="dt-logo" />
            <span>Loochon</span>
          </div>
          <div className="dt-footer-col">
            <h4 className="dt-footer-title">Social Media</h4>
            <ul className="dt-footer-list">
              {SOCIALS.map((social) => (
                <li key={social.key}>
                  <a
                    className={`dt-social dt-social--${social.key}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                  >
                    <svg className="dt-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                    <span>loochonmedia</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dt-footer-col">
            <h4 className="dt-footer-title">Contact Us</h4>
            <ul className="dt-footer-list">
              <li>support@gmail.com</li>
              <li>Bogotá, Colombia</li>
              <li>Help Center</li>
              <li>WhatsApp</li>
            </ul>
          </div>
          <div className="dt-footer-col">
            <h4 className="dt-footer-title">Legal</h4>
            <ul className="dt-footer-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="dt-footer-bottom">
          <div className="dt-container">© {new Date().getFullYear()} Loochon. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default DesktopLanding
