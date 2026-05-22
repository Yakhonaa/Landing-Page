function App() {
  return (
    <main className="min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <section>
        <div className="Navbar">
          <img src="public/logo.png" alt="Loochon" className="logo" />
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
        <div className="left-header-content-buttons-container">
          <div className="left-header-content-buttons">
              <button className="left-header-content-button">Get Started</button>
            </div>
        </div>
        <div className="quick-overall">
          <div className="quick-overall-content">
            <h3 className="quick-overall-content-title">Anything</h3>
            <p className="quick-overall-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className="quick-overall-content">
            <h3 className="quick-overall-content-title">Anywhere</h3>
            <p className="quick-overall-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
        <div className="stripe-wrapper">
  <div className="diagonal-stripe"></div>
</div>
      </section>
    </main>
  )
}

export default App
