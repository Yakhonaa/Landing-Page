import { useEffect, useState } from 'react'
import { useContent } from '../content/ContentContext'
import { SOCIAL_SVG_PATHS } from '../content/socialPaths'
import './DesktopLanding.css'

function DesktopLanding() {
  const { t, why, socials, popularJobs, features, bandStats, platform, locale } = useContent()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contactItems = [
    t('contact.1'),
    t('contact.2'),
    t('contact.3'),
    t('contact.4'),
  ]

  return (
    <div
      className={`dt platform-${platform}`}
      data-platform={platform}
      data-locale={locale}
    >
      <header className={scrolled ? 'dt-nav dt-nav--scrolled' : 'dt-nav'}>
        <div className="dt-container dt-nav-inner">
          <a className="dt-brand" href="#top">
            <img src="/icon_foreground.png" alt={t('brand')} className="dt-logo" />
            <span>{t('brand')}</span>
          </a>
          <nav className="dt-nav-links">
            <a href="#features">{t('nav.features')}</a>
            <a href="#jobs">{t('nav.jobs')}</a>
            <a href="#why">{t('nav.why')}</a>
            <a href="#privacy">{t('nav.privacy')}</a>
            <a href="#terms">{t('nav.terms')}</a>
            <button className="dt-btn dt-btn--primary" type="button">
              {t('cta.get_started')}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="dt-hero">
          <div className="dt-container dt-hero-inner">
            <div className="dt-hero-copy">
              <h1 className="dt-hero-title">
                {t('hero.title')}{' '}
                <span className="dt-accent">{t('brand')}</span>
              </h1>
              <p className="dt-hero-sub">{t('hero.description')}</p>
              <div className="dt-hero-actions">
                <button className="dt-btn dt-btn--primary dt-btn--lg" type="button">
                  {t('cta.get_started')}
                </button>
                <button className="dt-btn dt-btn--ghost dt-btn--lg" type="button">
                  {t('hero.explore_jobs')}
                </button>
              </div>
            </div>
            <div className="dt-hero-media">
              <div className="dt-phone dt-phone--back">
                <span className="dt-phone-notch"></span>
                <img
                  src="/hire.jpg"
                  alt={t('alt.hire_specialists')}
                  className="dt-phone-screen"
                />
              </div>
              <div className="dt-phone dt-phone--front">
                <span className="dt-phone-notch"></span>
                <img
                  src="/offer.jpg"
                  alt={t('alt.offer_preview')}
                  className="dt-phone-screen"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="dt-band">
          <div className="dt-container">
            <h2 className="dt-band-title">
              {t('quick_overall.title_before')}
              <span className="dt-accent">{t('quick_overall.title_highlight')}</span>
            </h2>
            <div className="dt-band-stats">
              {bandStats().map((stat) => (
                <div className="dt-stat" key={stat.label}>
                  <span className="dt-stat-num">{stat.num}</span>
                  <span className="dt-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="dt-section">
          <div className="dt-container">
            <h2 className="dt-section-title">{t('section.get_started')}</h2>
            <div className="dt-feature-grid">
              {features().map((feature) => (
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
            <h2 className="dt-section-title">{t('section.popular_jobs_title')}</h2>
            <ul className="dt-jobs-grid">
              {popularJobs().map((job) => (
                <li className="dt-job" key={job}>
                  {job}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="why" className="dt-section">
          <div className="dt-container">
            <h2 className="dt-section-title">{t('section.why_title')}</h2>
            <div className="dt-why-grid">
              {why().map((item) => (
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
            <h2 className="dt-cta-title">{t('cta.ready')}</h2>
            <button className="dt-btn dt-btn--primary dt-btn--lg" type="button">
              {t('cta.get_started')}
            </button>
          </div>
        </section>
      </main>

      <footer className="dt-footer">
        <div className="dt-container dt-footer-inner">
          <div className="dt-footer-brand">
            <img src="/icon_foreground.png" alt={t('brand')} className="dt-logo" />
            <span>{t('brand')}</span>
          </div>
          <div className="dt-footer-col">
            <h4 className="dt-footer-title">{t('footer.social_title')}</h4>
            <ul className="dt-footer-list">
              {socials().map((social) => (
                <li key={social.key}>
                  <a
                    className={`dt-social dt-social--${social.key}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                  >
                    <svg className="dt-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={SOCIAL_SVG_PATHS[social.key]} />
                    </svg>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dt-footer-col">
            <h4 className="dt-footer-title">{t('footer.contact_title')}</h4>
            <ul className="dt-footer-list">
              {contactItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="dt-footer-col">
            <h4 className="dt-footer-title">{t('footer.legal_title')}</h4>
            <ul className="dt-footer-list">
              <li>
                <a href="#privacy">{t('nav.privacy')}</a>
              </li>
              <li>
                <a href="#terms">{t('nav.terms')}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dt-footer-bottom">
          <div className="dt-container">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DesktopLanding
