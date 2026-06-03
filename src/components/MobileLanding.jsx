import { useEffect, useState } from 'react'
import { useContent } from '../content/ContentContext'
import { SOCIAL_SVG_PATHS } from '../content/socialPaths'

function MobileLanding() {
  const { t, list, why, socials, popularJobs, platform, locale } = useContent()
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const quickItems = list('quick_overall.item')
  const contactItems = list('contact')
  const features = [
    { title: t('feature.1.title'), body: t('feature.1.body') },
    { title: t('feature.2.title'), body: t('feature.2.body') },
    { title: t('feature.3.title'), body: t('feature.3.body') },
  ]

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
    <main
      className={`min-h-screen platform-${platform}`}
      data-platform={platform}
      data-locale={locale}
    >
      <section>
        <div className="Navbar">
          <a className="navbar-brand" href="#top">
            <img src="public/icon_foreground.png" alt={t('brand')} className="logo" />
          </a>
          <button
            className={isMenuOpen ? 'button-icon button-icon--open' : 'button-icon'}
            type="button"
            aria-label={t('nav.open_menu')}
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
                  {t('nav.privacy')}
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#terms" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.terms')}
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="top-header-content">
          <h1 className="left-header-content-title">{t('hero.title')}</h1>
          <h2 className="left-header-content-subtitle">
            {t('hero.subtitle_prefix')}{' '}
            <span className="Loochon-highlight">{t('brand')}</span>
          </h2>
        </div>
        <div className="first-header">
          <div className="left-header">
            <div className="left-header-content-description">
              <p>{t('hero.description')}</p>
            </div>
          </div>
          <div className="right-header">
            <div className="right-header-content">
              <div className="image-stack">
                <div className="phone-mock">
                  <span className="phone-mock-camera"></span>
                  <img
                    src="/offer.jpg"
                    className="phone-mock-screen"
                    alt={t('alt.offer_preview')}
                  />
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
            <button className="left-header-content-button">{t('cta.get_started')}</button>
          </div>
        </div>
        <h3 className="quick-overall-content-title">
          {t('quick_overall.title_before')}
          <span className="highlight">{t('quick_overall.title_highlight')}</span>
        </h3>
        <ul className="quick-overall">
          {quickItems.map((item) => (
            <li
              key={item}
              className="quick-overall-content quick-overall-content-description"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="stripe-wrapper">
          <div className="diagonal-stripe-2"></div>
        </div>
        <div className="get-started-container">
          <h3 className="get-started-title">{t('section.get_started')}</h3>
        </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title">{features[0].title}</h3>
          <p className="hire-specialists-description">{features[0].body}</p>
          <div className="stripe-wrapper">
            <div className="diagonal-stripe-3"></div>
          </div>
          <div className="prestadores-image-container-wrapper">
            <div className="prestadores-container">
              <img
                src="/prestadores.jpg"
                className="prestadores-image"
                alt={t('alt.hire_specialists')}
              />
            </div>
          </div>
        </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title">{features[1].title}</h3>
          <div className="stripe-wrapper">
            <div className="diagonal-stripe-6"></div>
          </div>
          <p className="hire-specialists-description">{features[1].body}</p>
          <div className="stripe-wrapper">
            <div className="diagonal-stripe-4"></div>
          </div>
          <div className="prestadores-image-container-wrapper second-prestadores-container">
            <div className="prestadores-container">
              <img
                src="/prestadores.jpg"
                className="prestadores-image"
                alt={t('alt.hire_specialists')}
              />
            </div>
          </div>
        </div>
        <div className="hire-specialists-container">
          <div className="stripe-wrapper">
            <div className="diagonal-stripe-7"></div>
          </div>
          <h3 className="hire-specialists-title-special-2">{features[2].title}</h3>
          <p className="hire-specialists-description">{features[2].body}</p>
        </div>

        <div className="popular-jobs-container">
          <h3 className="popular-jobs-title">{t('section.popular_jobs_title')}</h3>
          <ul className="popular-jobs-list">
            {popularJobs().map((job) => (
              <li className="popular-jobs-item" key={job}>
                {job}
              </li>
            ))}
          </ul>
        </div>

        <div className="stripe-wrapper">
          <div className="diagonal-stripe-5"></div>
        </div>

        <div className="why-us-container">
          <h3 className="why-us-title">{t('section.why_title')}</h3>
          <div className="why-us-description">
            {why().map((block) => (
              <div key={block.title}>
                <h4 className="highlight-list">{block.title}</h4>
                <ul className="why-us-sublist">
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="stripe-wrapper">
          <div className="diagonal-stripe-8"></div>
        </div>

        <footer className="credibility-section">
          <div className="credibility-column">
            <h3 className="credibility-title">{t('footer.social_title')}</h3>
            <ul className="credibility-list">
              {socials().map((social) => (
                <li
                  key={social.key}
                  className="credibility-item credibility-item--social"
                >
                  <a
                    className={`social-link social-link--${social.key}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                  >
                    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={SOCIAL_SVG_PATHS[social.key]} />
                    </svg>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="credibility-column">
            <h3 className="credibility-title">{t('footer.contact_title')}</h3>
            <ul className="credibility-list">
              {contactItems.map((item) => (
                <li className="credibility-item" key={item}>
                  {item}
                </li>
              ))}
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
              <button className="left-header-content-button-2">
                {t('cta.get_started')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MobileLanding
