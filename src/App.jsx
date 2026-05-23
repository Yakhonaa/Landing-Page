function App() {
  return (
    <main className="min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <section>
        <div className="Navbar">
          <img src="public/icon_foreground.png" alt="Loochon" className="logo" />
          <button className="button-icon" type="button" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
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
              <p>Loochon is a platform that allows you to hire local professionals and offer your skills to the world.</p>
            </div>
          </div>
          <div className="right-header">
            <div className="right-header-content">
              <div className="image-stack">
                <div className="offer-image-container">
                  <img src="/offer.jpg" className="offer-image" alt="Offer preview" />
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
        <div className="quick-overall">
          <div className="quick-overall-content"> 
            <p className="quick-overall-content-description">
              Over 250 categories to choose from, and 10,000+ verified professionals.
            </p>
          </div>
          <div className="quick-overall-content-separator"></div>
          <div className="quick-overall-content"> 
            <p className="quick-overall-content-description">
              Hire professionals all across Colombia, or offer your skills in your region.
            </p>
          </div>
        </div>
        <div className="stripe-wrapper">
          <div className="diagonal-stripe-2"></div>
        </div>
        <div className="get-started-container">
            <h3 className="get-started-title">Get started</h3>
          </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title">Hire specialists quickly</h3>
          <p className="hire-specialists-description">
            Reach out to an expert in your area and get the job done in less than a minute.
            Our platform is designed to be easy to use and navigate, so you can get the job done quickly and efficiently.
          </p>
          <div className="prestadores-image-container-wrapper">
            <div className="prestadores-container">
              <img src="/prestadores.jpg" className="prestadores-image" alt="Hire specialists" />
            </div>
          </div>
        </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title">Let others find you</h3>
          <p className="hire-specialists-description">
            Create a profile and let others know about your skills and services.
            Get hired for your next project and expand your career opportunities, 
            or start your own business and grow your network.
          </p>
          <div className="prestadores-image-container-wrapper">
            <div className="prestadores-container">
              <img src="/offer_singular.jpg" className="prestadores-image" alt="Hire specialists" />
            </div>
          </div>
        </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title">Use both sides of the platform</h3>
          <p className="hire-specialists-description">
            We support multiple roles in the platform, so you can use both sides to your advantage.
          </p>
          
        </div>
      </section>
    </main>
  )
}

export default App
