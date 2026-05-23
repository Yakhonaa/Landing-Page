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
          <div className="prestadores-image-container-wrapper">
            <div className="prestadores-container">
              <img src="/prestadores.jpg" className="prestadores-image" alt="Hire specialists" />
            </div>
          </div>
        </div>
        <div className="hire-specialists-container">
          <h3 className="hire-specialists-title-special-2">Use both sides of the platform</h3>
          <p className="hire-specialists-description">
          Why limit yourself? Our platform is designed for the modern ecosystem where you 
          might be an employer today and a creator tomorrow. We’ve built a 
          comprehensive marketplace supporting over 200 distinct job categories, 
          ensuring that no matter how niche your project or skill set is, you have a home here.
          </p>
        </div>

        <div className="stripe-wrapper">
            <div className="diagonal-stripe-5"></div>
          </div>

        <div className="why-us-container">
           <h3 className="why-us-title">Why us?</h3>
           <p className="why-us-description">
           <ul>
            <li className="highlight-list">🇨🇴 100% Colombian Coverage</li>
            <li>We are Colombia's first freelance platform, which
              maps major metropolitan hubs down to regional 
              municipalities. Search and filter by exact 
              location to instantly find pioneering 
              local professionals who perfectly match your regional context.</li><br />

               <li className="highlight-list">🛠️ 200+ Industries At Your Fingertips</li>
            <li>Our platform spans over 200 job categories. Whether you need reliable hands-on help—like 
              licensed electricians, professional cleaners, and construction experts—or 
              specialized trade services, 
              the exact professional you need in your city is just a message away.</li><br />

            <li className="highlight-list">💬 Real-Time, Direct Communication</li>
            <li>Skip the traditional agency red tape. Loochon puts you in
               direct contact with experts instantly, making collaboration, 
               negotiation, and project updates effortless.</li><br />
            
           </ul>
          </p>
        </div>

      </section>
    </main>
  )
}

export default App
