function App() {
  return (
    <main className="min-h-screen">
      <section>
        <div className="first-header">
          <div className="left-header">
            <div className="left-header-content">
              <h1 className="left-header-content-title">Hire and Offer</h1>
              <h2 className="left-header-content-subtitle">
                with <span className="Loochon-highlight">Loochon</span>
              </h2>
            </div>
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
                <div className="hire-image-container">
                  <img src="/hire.jpg" className="hire-image" alt="Hire preview" />
                </div>
              </div>
            </div>
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
